import { handleRetry } from "./retry.js";
import { getFromCache, saveToCache } from "./cache.js";
import { isNode } from "../utils/environment.js"; // Use this one only

// No need to import environment again as it's already imported
// import environment from "../utils/environment.js";
// const { isNode } = environment; // Remove this line

import fetch from "node-fetch"; // If running in Node.js

export const request = async ({
  url,
  method,
  headers,
  data,
  timeout,
  cache,
}) => {
  const finalHeaders = headers || {};
  const options = { method, headers: finalHeaders };

  if (data) options.body = JSON.stringify(data);
  if (timeout) options.timeout = timeout;

  const cachedData = cache && getFromCache(url);
  if (cachedData) return cachedData;

  // Use fetch based on environment (Node.js or Browser)
  const requestFn = isNode() ? fetch : window.fetch;

  try {
    const response = await handleRetry(() => requestFn(url, options));
    if (cache) saveToCache(url, response);
    return response.json();
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
};
