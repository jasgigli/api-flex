// src/config/default.js
export const defaultConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // Default timeout
  retries: 3, // Default number of retries
  retryDelay: 1000, // Default retry delay
};
