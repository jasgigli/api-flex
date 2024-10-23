// src/config/default.js

export const defaultConfig = {
  headers: {
    "Content-Type": "application/json", // Default content type for requests
  },
  timeout: 5000, // Default timeout for requests in milliseconds
  retries: 3, // Default number of retries for failed requests
  retryDelay: 1000, // Default delay between retries in milliseconds
  token: null, // Initial token value for authentication
  failureThreshold: 5, // Default failure threshold for the circuit breaker
  resetTimeout: 30000, // Default reset timeout for the circuit breaker in milliseconds
  // Additional default configurations can be added here as needed
};
