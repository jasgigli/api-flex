class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5; // Number of failures to trigger circuit
    this.resetTimeout = options.resetTimeout || 30000; // Time before circuit attempts to close
    this.failureCount = 0; // Track consecutive failures
    this.state = "CLOSED"; // Circuit state (CLOSED, OPEN, HALF-OPEN)
    this.nextAttempt = null; // When we can attempt again
  }

  async call(action) {
    // If circuit is OPEN and timeout has not expired, reject the call
    if (this.state === "OPEN" && Date.now() < this.nextAttempt) {
      throw new Error("Circuit is OPEN, please wait before retrying.");
    }

    try {
      // If circuit is HALF-OPEN or CLOSED, attempt the action
      const result = await action();
      this.success();
      return result;
    } catch (error) {
      this.failure();
      throw error;
    }
  }

  success() {
    this.failureCount = 0;
    this.state = "CLOSED"; // Close the circuit after a successful request
  }

  failure() {
    this.failureCount += 1;
    if (this.failureCount >= this.failureThreshold) {
      this.trip();
    }
  }

  trip() {
    this.state = "OPEN";
    this.nextAttempt = Date.now() + this.resetTimeout; // Set time for next allowed attempt
    console.warn(
      `Circuit OPEN: Block requests for ${this.resetTimeout / 1000}s.`
    );
  }

  reset() {
    this.state = "HALF-OPEN";
  }
}

export default CircuitBreaker;
