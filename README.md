# 🛠️ **api-flex** — A Flexible and Powerful API Handling Library

[![npm](https://img.shields.io/npm/dm/api-flex.svg)](https://www.npmjs.com/package/api-flex)
[![npm](https://img.shields.io/npm/v/api-flex.svg)](https://www.npmjs.com/package/api-flex)
[![License](https://img.shields.io/github/license/jasgigli/api-flex.svg)](https://github.com/jasgigli/api-flex/blob/main/LICENSE)

**`api-flex`** combines the simplicity of `fetch` and the power of `axios`, bringing modern solutions to API request handling. With built-in retries, token management, error handling, and caching, it removes the complexities of working with HTTP requests.

---

## 🚀 **Key Features**

- 🌐 **Unified API**: Combines `fetch`'s flexibility with `axios`'s power.
- 🔁 **Automatic Retries**: Set up configurable retries for failed requests.
- 🔐 **Token Management**: Easily manage authorization tokens for secure API calls.
- ⚠️ **Centralized Error Handling**: Streamlined error management and logging.
- 🧠 **Response Caching**: Optional in-memory caching to optimize repeated requests.
- ⚡ **Lightweight**: Efficiently built for modern applications with a small footprint.

---

## 📦 Installation

Install `api-flex` via npm:

```bash
npm install api-flex
```

---

## 🎯 **Why Use `api-flex`?**

`api-flex` simplifies complex API integrations by providing an intuitive and feature-rich library. You don't have to set up retries, caching, or token handling manually—everything is configured out-of-the-box.

---

## 💻 **Basic Usage Examples**

### 💻 `GET` Requests

### 🟢 **Basic GET Request**

```javascript
import apiFlex from "api-flex";

const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
console.log(data);
```

#### 🔍 Using `try-catch` with a Function

```javascript
import apiFlex from "api-flex";

const fetchUser = async () => {
  try {
    const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

fetchUser();
```

#### 🟢 Using Promises

```javascript
import apiFlex from "api-flex";

apiFlex("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching user:", error));
```

### 🔒 **GET Request with Custom Headers**

```javascript
import apiFlex from "api-flex";

const headers = { Authorization: "Bearer my-token" };
const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1", {
  headers,
});
console.log(data);
```

#### 🔁 GET Request with Optional Parameters

```javascript
import apiFlex from "api-flex";

const fetchData = async (url) => {
  return await apiFlex(url);
};

const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
console.log(data);
```

#### 🟢 Fetching Data from a Dynamic URL

```javascript
import apiFlex from "api-flex";

const userId = 1;
const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
const data = await apiFlex(url);
console.log(data);
```

#### 🟢 Logging the Result Immediately

```javascript
import apiFlex from "api-flex";

(async () =>
  console.log(await apiFlex("https://jsonplaceholder.typicode.com/posts/1")))();
```

---

## 📚 More Modern Usage Examples

### **GET Request**

```javascript
import apiFlex from "api-flex";

const fetchPost = async () => {
  try {
    const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};

fetchPost();
```

### **POST Request**

```javascript
import apiFlex from "api-flex";

const createPost = async () => {
  const postData = {
    title: "New Post",
    body: "This is a new post.",
    userId: 1,
  };

  try {
    const data = await apiFlex("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Created Post:", data);
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

createPost();
```

### **PUT Request**

```javascript
import apiFlex from "api-flex";

const updatePost = async () => {
  const updatedData = {
    id: 1,
    title: "Updated Title",
    body: "Updated body content",
    userId: 1,
  };

  try {
    const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Updated Post:", data);
  } catch (error) {
    console.error("Error updating post:", error);
  }
};

updatePost();
```

### **DELETE Request**

```javascript
import apiFlex from "api-flex";

const deletePost = async () => {
  try {
    await apiFlex("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
    console.log("Post deleted successfully.");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

deletePost();
```

---

# 📦 Integration with Different Frameworks and Libraries📦

# `Node.js` <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="30"/>( `Express` <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" width="30"/>)

You can easily integrate `api-flex` in a Node.js/Express application for server-side API calls.

#### Example:

```javascript
import express from "express";
import apiFlex from "api-flex";

const app = express();

app.get("/post", async (req, res) => {
  try {
    const post = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error.message);
    res.status(500).send("Failed to fetch post.");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

# `React` <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="30"/>

## 🛠️ Simple `api-flex` Usage in React

### Loging the result in the Console

```jsx
import React from "react";
import { useEffect } from "react";
import apiFlex from "api-flex";

const App = () => {
  useEffect(() => {
    apiFlex("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Welcome to ApiFlex Library</h1>
    </div>
  );
};

export default App;
```

### Fetching Single Data

```jsx
import React, { useEffect, useState } from "react";
import apiFlex from "api-flex";

const FetchSingleData = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    apiFlex("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => setPost(data))
      .catch((err) => console.error("Error:", err.message));
  }, []);

  return (
    <div>
      <h1>Single Data</h1>
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default FetchSingleData;
```

### Batching Multiple API Requests

```jsx
import React, { useEffect, useState } from "react";
import apiFlex from "api-flex";

const FetchBatchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const urls = [
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://jsonplaceholder.typicode.com/posts/2",
      "https://jsonplaceholder.typicode.com/posts/3",
    ];

    apiFlex
      .batch(urls)
      .then((responses) => setPosts(responses.map((res) => res.data)))
      .catch((err) => console.error("Error:", err.message));
  }, []);

  return (
    <div>
      <h1>Batch Data</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchBatchData;
```

---

### 🔑 Key Points:

- **Concise**: These examples use minimal code to achieve the desired functionality.
- **Batch Requests**: `apiFlex.batch()` simplifies fetching multiple URLs.
- **Error Handling**: Easily handle and display errors in your React app.

---

# ⚡️Circuit Breaker Feature in api-flex 🔒

The **Circuit Breaker** feature in the `api-flex` library enhances API request resilience by preventing repeated attempts to call a failing service. It helps improve application stability and user experience by managing requests more intelligently.

## Overview

A Circuit Breaker monitors the state of your requests and can prevent requests from being sent to a service that is already failing. When the failure threshold is reached, the Circuit Breaker trips, and subsequent requests are automatically failed without reaching the service, allowing it to recover before trying again.

## Configuration Options

You can configure the Circuit Breaker with the following options:

- **`failureThreshold`**: The number of failures before the circuit trips (default: `5`).
- **`resetTimeout`**: The duration in milliseconds for which the circuit remains open before trying again (default: `30000`).

## Example Usage

Here’s how to implement the Circuit Breaker feature in your React component using `api-flex`:

```javascript
import React, { useEffect, useState } from "react";
import apiFlex from "api-flex";

const FetchSingleData = () => {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiFlex(
          "https://jsonplaceholder.typicode.com/posts/1",
          {
            retries: 3, // Number of retries on failure
            retryDelay: 1000, // Delay between retries in milliseconds
            failureThreshold: 5, // Circuit trips after 5 failures
            resetTimeout: 30000, // Circuit remains open for 30 seconds before resetting
          }
        );

        setPostData(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.error("Request failed:", err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Single API Request with api-flex</h1>
      <pre>{JSON.stringify(postData, null, 2)}</pre>
    </div>
  );
};

export default FetchSingleData;
```

## How It Works

1. **Failure Handling**: The Circuit Breaker tracks the number of consecutive failures. Once the specified `failureThreshold` is reached, it trips the circuit.
2. **Automatic Retries**: During the `resetTimeout`, any requests sent to the failing service will automatically fail, allowing time for recovery without overwhelming the service.
3. **Graceful Error Reporting**: Users can see the error state without excessive logging or failed requests.

## Benefits

- **Improved Stability**: Reduces the risk of overwhelming a failing service.
- **Enhanced User Experience**: Users experience fewer request failures and receive timely feedback.
- **Configurable**: Adjust settings based on your application's needs.

---

## 📊 Comparison: `fetch`, `axios`, and `api-flex`

| Feature                              | `fetch`     | `axios`     | `api-flex`     |
| ------------------------------------ | ----------- | ----------- | -------------- |
| **Built-in retries**                 | ❌          | ❌          | ✅             |
| **Token management**                 | ❌ (manual) | ❌ (manual) | ✅ (automatic) |
| **Centralized errors**               | ❌          | ❌          | ✅             |
| **Response caching**                 | ❌          | ❌          | ✅             |
| **Timeout handling**                 | ❌          | ✅          | ✅             |
| **Batch requests**                   | ❌          | ❌          | ✅             |
| **Request/Response Interceptors**    | ❌          | ✅          | ✅             |
| **Exponential backoff**              | ❌          | ❌          | ✅             |
| **Customizable defaults**            | ❌          | ✅          | ✅             |
| **Environment detection**            | ❌          | ❌          | ✅             |
| **Automatic rate-limiting handling** | ❌          | ❌          | ✅             |
| **Lightweight**                      | ✅          | ❌          | ✅             |
| **Wide browser support**             | ✅          | ✅          | ✅             |

---

### Key Advantages of `api-flex` Over Other Libraries:

- **Batch Requests**: Unlike `fetch` or `axios`, `api-flex` supports batching multiple API requests into a single operation, reducing network overhead.
- **Automatic Token Management**: `api-flex` handles token refreshing and management automatically, streamlining the process of authenticated requests.
- **Built-in Retry Mechanism**: With built-in retry logic and support for exponential backoff, `api-flex` offers more robust error handling compared to the manual approaches in `fetch` and `axios`.
- **Rate Limiting Handling**: The rate-limiting feature in `api-flex` helps prevent API overuse, something `fetch` and `axios` don’t handle out-of-the-box.

---

# 🚀 Features of Api-Flex

### Key Features

## - **⚡️Circuit Breaker Feature in api-flex 🔒**

The **Circuit Breaker** feature in the `api-flex` library enhances API request resilience by preventing repeated attempts to call a failing service. It helps improve application stability and user experience by managing requests more intelligently.

## - **Flexible API Requests**

- Easily make HTTP requests using a simple interface that supports both GET and POST methods.

**Example:**

```javascript
import apiFlex from "api-flex";

const fetchPosts = async () => {
  const posts = await apiFlex("https://jsonplaceholder.typicode.com/posts");
  console.log("Posts:", posts);
};

fetchPosts();
```

## - **Automatic Retries**

- Configurable retry logic to automatically attempt to re-fetch data in case of network failures or errors. Supports customizable retry counts and delays.

## - **Timeout Handling**

- Customizable request timeout settings to prevent hanging requests and improve user experience.

**Example:**

```javascript
import apiFlex from "api-flex";

const fetchPostWithTimeout = async () => {
  try {
    const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1", {
      timeout: 2000, // Timeout in 2 seconds
    });
    console.log("Fetched Post with Timeout:", data);
  } catch (error) {
    console.error("Error fetching post due to timeout:", error.message);
  }
};

fetchPostWithTimeout();
```

## - **Interceptor Support**

- Ability to add request and response interceptors, allowing developers to modify requests before sending or responses before returning.

**Example:**

```javascript
import apiFlex from "api-flex";

const addRequestInterceptor = (config) => {
  // Modify request config
  console.log("Request Interceptor:", config);
  return config;
};

const addResponseInterceptor = (response) => {
  // Modify response data
  console.log("Response Interceptor:", response);
  return response;
};

apiFlex.addRequestInterceptor(addRequestInterceptor);
apiFlex.addResponseInterceptor(addResponseInterceptor);
```

## - **Environment Detection**

- Compatible with both Node.js and browser environments, making it versatile for various applications.

**Example:**

```javascript
import apiFlex from "api-flex";

const fetchData = async () => {
  const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
  console.log("Fetched Data (Node/Browser Compatible):", data);
};

fetchData();
```

## - **Configurable Defaults**

- Easy-to-set default configurations (headers, timeouts, etc.) to streamline API calls.

**Example:**

```javascript
import apiFlex from "api-flex";

const apiClient = new apiFlex({
  headers: {
    Authorization: "Bearer your-token",
  },
  timeout: 5000, // Default timeout
});

const fetchDefaultPost = async () => {
  const data = await apiClient("https://jsonplaceholder.typicode.com/posts/1");
  console.log("Fetched Post with Default Configs:", data);
};

fetchDefaultPost();
```

## - **Lightweight and Fast**

- Designed to be lightweight and efficient, ensuring minimal performance impact on applications.

---

## 📈 Conclusion

`api-flex` combines the best of modern API handling libraries, making it your go-to tool for powerful and streamlined API requests. Forget the headaches of retries, caching, token handling, and error management—`api-flex` does it all for you!

---

Here’s a more modern and visually appealing version of the License and Contributing section, enhancing clarity and engagement:

---

## 📜 License

This project is licensed under the **MIT License**. For detailed information, please refer to the [LICENSE](https://github.com/jasgigli/api-flex/blob/main/LICENSE) file.

## 🤝 Contributing

We welcome contributions from the community! Here’s how you can help:

- **Report Issues**: If you encounter any bugs or have suggestions, please [open an issue](https://github.com/jasgigli/api-flex/issues).
- **Submit Pull Requests**: Contributions to the codebase are encouraged. Please follow the standard GitHub workflow for submitting your changes.

**Contact Us**: If you have questions or want to collaborate, feel free to reach out via email: [overview.jjj@gmail.com](mailto:overview.jjj@gmail.com).

## 🌐 Official Web App

Explore **Api-Flex** in action at our official web app: [apiflex.vercel.app](https://apiflex.vercel.app/).
