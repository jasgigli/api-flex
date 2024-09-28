import { request } from "./core/request.js";
import { setToken, refreshTokenIfNeeded } from "./core/token.js";
import { addInterceptor, removeInterceptor } from "./core/interceptors.js";
import { defaultConfig } from "./config/default.js";

class ApiFlex {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
    this.token = this.config.token || null;
  }

  async request(options) {
    await refreshTokenIfNeeded(this.token);
    return request({ ...this.config, ...options });
  }

  get(url, headers = {}, cache = false) {
    return this.request({ url, method: "GET", headers, cache });
  }

  post(url, data, headers = {}) {
    return this.request({ url, method: "POST", data, headers });
  }

  put(url, data, headers = {}) {
    return this.request({ url, method: "PUT", data, headers });
  }

  delete(url, headers = {}) {
    return this.request({ url, method: "DELETE", headers });
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

export default new ApiFlex();
