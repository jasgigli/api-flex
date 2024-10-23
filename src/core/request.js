import { handleRetry } from "./retry.js";
import { getFromCache, saveToCache } from "./cache.js";
import { isNode } from "../utils/environment.js";
import fetch from "node-fetch"; // If running in Node.js

export const request = async ({
  url,
  method = "GET",
  headers,
  data,
  timeout,
  cache = false,
}) => {
  const finalHeaders = { ...headers, "Content-Type": "application/json" };
  const options = { method, headers: finalHeaders };

  if (data) options.body = JSON.stringify(data);

  // Handle caching
  if (cache) {
    const cachedData = getFromCache(url);
    if (cachedData) return cachedData;
  }

  // Use fetch based on environment (Node.js or Browser)
  const requestFn = isNode() ? fetch : window.fetch;

  try {
    const response = await handleTimeout(
      handleRetry(() => requestFn(url, options)),
      timeout
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonData = await response.json();

    // Optionally save to cache
    if (cache) saveToCache(url, jsonData);

    return jsonData; // Return JSON directly
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
};

// Helper function to manage request timeout
const handleTimeout = (promise, timeout) => {
  if (!timeout) return promise;

  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    ),
  ]);
};
