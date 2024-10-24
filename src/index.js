import { request } from "./core/request.js";
import { setToken, refreshTokenIfNeeded } from "./core/token.js";
import { addInterceptor, removeInterceptor } from "./core/interceptors.js";
import { defaultConfig } from "./config/default.js";
import CircuitBreaker from "./core/circuitBreaker.js";

class ApiFlex {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
    this.token = this.config.token || null;

    // Initialize circuit breaker
    this.circuitBreaker = new CircuitBreaker({
      failureThreshold: this.config.failureThreshold || 5,
      resetTimeout: this.config.resetTimeout || 30000,
    });
  }

  async call(url, options = {}) {
    try {
      this.token = await refreshTokenIfNeeded(this.token); // Refresh token if needed

      return await this.circuitBreaker.call(() =>
        this.requestData(url, options)
      );
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  }

  async requestData(url, options) {
    return await request({ ...this.config, ...options, url });
  }

  async batch(urls, options = {}) {
    const promises = urls.map((url) => this.call(url, options));
    const results = await Promise.allSettled(promises);
    return results.map((result) =>
      result.status === "fulfilled"
        ? { data: result.value }
        : { error: result.reason }
    );
  }

  setToken(token) {
    setToken(token);
    this.token = token;
  }

  addRequestInterceptor(interceptor) {
    addInterceptor("request", interceptor);
  }

  addResponseInterceptor(interceptor) {
    addInterceptor("response", interceptor);
  }

  removeInterceptor(type, id) {
    removeInterceptor(type, id);
  }
}

const apiFlexInstance = new ApiFlex();

const apiFlex = async (url, options) => {
  return await apiFlexInstance.call(url, options);
};

apiFlex.batch = async (urls, options = {}) => {
  return await apiFlexInstance.batch(urls, options);
};

export default apiFlex;
