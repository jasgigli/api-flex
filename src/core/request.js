import { handleRetry } from "./retry.js";
import { isNode } from "../utils/environment.js";

// Conditionally import 'node-fetch' only if we're in Node.js
let fetchFn;
if (isNode()) {
  fetchFn = (await import("node-fetch")).default; // Dynamic import for Node.js
} else {
  fetchFn = window.fetch.bind(window); // Use the native fetch in the browser
}

export const request = async ({
  url,
  method = "GET",
  headers,
  data,
  timeout,
  retries = 3, // Add retries parameter here
  retryDelay = 1000, // Add retryDelay parameter here
}) => {
  const finalHeaders = { ...headers, "Content-Type": "application/json" };
  const options = { method, headers: finalHeaders };

  if (data) options.body = JSON.stringify(data);

  // Function to call for retry
  const fetchFunction = async () => {
    const response = await fetchFn(url, options);

    // Handle rate limiting (429 status)
    if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After");
      const delay = retryAfter ? parseInt(retryAfter) * 1000 : 1000; // Convert to milliseconds
      throw new Error(`Rate limit exceeded. Retrying after ${delay}ms.`);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  };

  try {
    // Pass the fetch function to handleRetry with user-defined retries and delay
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
