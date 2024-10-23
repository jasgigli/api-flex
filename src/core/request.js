// src/core/request.js
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
  cache,
}) => {
  const finalHeaders = { ...headers };
  const options = { method, headers: finalHeaders };

  if (data) options.body = JSON.stringify(data);
  if (timeout) options.timeout = timeout;

  const cachedData = cache && getFromCache(url);
  if (cachedData) return cachedData;

  // Use fetch based on environment (Node.js or Browser)
  const requestFn = isNode() ? fetch : window.fetch;

  try {
    const response = await handleRetry(() => requestFn(url, options));
    const jsonData = await response.json();

    // Optionally save to cache
    if (cache) saveToCache(url, jsonData);

    return jsonData; // Return JSON directly
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
};
