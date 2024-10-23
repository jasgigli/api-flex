import { isNode } from "../utils/environment.js";

let cache = {};

export const getFromCache = (key) => {
  if (isNode()) {
    // Node.js specific caching (could be file-based or memory)
    return cache[key];
  } else {
    // Browser-based caching using localStorage
    return localStorage.getItem(key);
  }
};

export const saveToCache = (key, data) => {
  if (isNode()) {
    cache[key] = data;
  } else {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
