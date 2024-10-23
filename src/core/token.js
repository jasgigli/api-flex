// src/core/token.js

import { isNode } from "../utils/environment.js"; // Import the isNode function

let token = null;

// Function to set the token
export const setToken = (newToken) => {
  token = newToken;

  // Only try to set localStorage if we are in the browser
  if (!isNode() && typeof localStorage !== "undefined") {
    localStorage.setItem("apiToken", newToken);
  }
};

// Function to get the token
export const getToken = () => {
  // Only try to access localStorage if we are in the browser
  if (!isNode() && typeof localStorage !== "undefined") {
    return localStorage.getItem("apiToken");
  }
  return token; // Return the in-memory token if in Node.js
};

// Function to refresh token if needed
export const refreshTokenIfNeeded = async (token) => {
  // Add your logic to check if the token needs to be refreshed
  // For now, let's assume the token is always valid
  return token;
};
