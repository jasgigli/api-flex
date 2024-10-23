// src/core/retry.js
export const handleRetry = async (fn, retries = 3, delay = 1000) => {
  let attemptCount = 0; // Local attempt count for this function

  while (retries > 0) {
    try {
      attemptCount++;
      console.log(`Attempt ${attemptCount}...`);
      return await fn(); // Call the actual function
    } catch (error) {
      console.error(`Attempt ${attemptCount} failed: ${error.message}`);
      retries--;

      // Check for rate limit error
      if (error.message.includes("Rate limit exceeded")) {
        const retryAfter = parseInt(error.message.match(/\d+/)[0]) || 1000; // Default to 1 second
        console.log(`Rate limit hit. Retrying in ${retryAfter}ms...`);
        await new Promise((res) => setTimeout(res, retryAfter)); // Wait based on the Retry-After
      } else {
        // If retries remain for other errors, wait before retrying
        if (retries > 0) {
          console.log(`Retrying in ${delay}ms...`);
          await new Promise((res) => setTimeout(res, delay));
          delay *= 2; // Exponential backoff
        } else {
          throw new Error(
            `Request failed after ${attemptCount} attempts: ${error.message}`
          );
        }
      }
    }
  }
};
