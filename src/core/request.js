import { handleRetry } from "./retry.js";
import { isNode } from "../utils/environment.js";
import fetch from "node-fetch"; // If running in Node.js

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

  // Use fetch based on environment (Node.js or Browser)
  const requestFn = isNode() ? fetch : window.fetch;

  // Function to call for retry
  const fetchFunction = async () => {
    const response = await requestFn(url, options);

    // Handle rate limiting
    if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After");
      const delay = retryAfter ? parseInt(retryAfter) * 1000 : 1000; // Convert to milliseconds
      throw new Error(`Rate limit exceeded. Retrying after ${delay}ms.`);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
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
