// src/core/retry.js
export const handleRetry = async (fn, retries = 3, delay = 1000) => {
  while (retries > 0) {
    try {
      return await fn();
    } catch (error) {
      if (--retries === 0) throw error;
      await new Promise((res) => setTimeout(res, delay));
      delay *= 2; // Exponential backoff
    }
  }
};
