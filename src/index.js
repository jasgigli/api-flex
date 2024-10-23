import { request } from "./core/request.js";
import { setToken, refreshTokenIfNeeded } from "./core/token.js"; // Import token management
import { addInterceptor, removeInterceptor } from "./core/interceptors.js"; // Import interceptors
import { defaultConfig } from "./config/default.js"; // Import the default configuration
import CircuitBreaker from "./core/circuitBreaker.js"; // Import the circuit breaker

class ApiFlex {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config }; // Merge default config with user config
    this.token = this.config.token || null;

    // Initialize circuit breaker with user-defined options or defaults
    this.circuitBreaker = new CircuitBreaker({
      failureThreshold: this.config.failureThreshold || 5,
      resetTimeout: this.config.resetTimeout || 30000,
    });
  }

  async call(url, options = {}) {
    try {
      this.token = await refreshTokenIfNeeded(this.token); // Refresh token if needed

      // Wrap the request in the circuit breaker logic
      return await this.circuitBreaker.call(() =>
        this.requestData(url, options)
      );
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null; // Handle error gracefully
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

// Export the apiFlex function and add a batch method directly on it
const apiFlexInstance = new ApiFlex();

const apiFlex = async (url, options) => {
  return await apiFlexInstance.call(url, options);
};

apiFlex.batch = async (urls, options = {}) => {
  return await apiFlexInstance.batch(urls, options);
};

export default apiFlex;
