import { handleRetry } from "./retry.js";
import { isNode } from "../utils/environment.js";

let fetchFn;

const getFetchFn = async () => {
  if (isNode()) {
    if (!fetchFn) {
      const { default: nodeFetch } = await import("node-fetch");
      fetchFn = nodeFetch;
    }
  } else {
    fetchFn = window.fetch.bind(window);
  }
  return fetchFn;
};

export const request = async ({
  url,
  method = "GET",
  headers,
  data,
  timeout,
  retries = 3,
  retryDelay = 1000,
}) => {
  const finalHeaders = { ...headers, "Content-Type": "application/json" };
  const options = { method, headers: finalHeaders };

  if (data) options.body = JSON.stringify(data);

  // Fetch function with retry logic
  const fetchFunction = async () => {
    const fetch = await getFetchFn();
    const response = await fetch(url, options);

    if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After");
      const delay = retryAfter ? parseInt(retryAfter) * 1000 : retryDelay;
      throw new Error(`Rate limit exceeded. Retrying after ${delay}ms.`);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  };

  try {
    return await handleTimeout(
      handleRetry(fetchFunction, retries, retryDelay),
      timeout
    );
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
