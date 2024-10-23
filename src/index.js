import { request } from "./core/request.js";
import { setToken, refreshTokenIfNeeded } from "./core/token.js";
import { addInterceptor, removeInterceptor } from "./core/interceptors.js";
import { defaultConfig } from "./config/default.js";

class ApiFlex {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
    this.token = this.config.token || null;
  }

  async call(url, options = {}) {
    try {
      this.token = await refreshTokenIfNeeded(this.token); // Assume the token may be updated
      const data = await this.requestData(url, options);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null; // Or throw error if preferred
    }
  }

  async requestData(url, options) {
    return await request({ ...this.config, ...options, url });
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

// Export the default function correctly
export default async function apiFlex(url, options) {
  const instance = new ApiFlex();
  return await instance.call(url, options);
}
