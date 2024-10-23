
// src/config/deafault.js
export const defaultConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  retry: 3, // Default retries
  timeout: 5000, // Default timeout in ms
  token: null, // Optional token
};
