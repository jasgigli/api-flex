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

### 🔁 **Automatic Retries Example**

```javascript
import apiFlex from "api-flex";

const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1", {
  retries: 3,
  retryDelay: 1000, // Retry every 1 second
});
console.log(data);
```

#### 🟢 Using an Immediately Invoked Function Expression (IIFE)

```javascript
import apiFlex from "api-flex";

(async () => {
  const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
})();
```

#### 🟢 Basic GET with Error Handling

```javascript
import apiFlex from "api-flex";

(async () => {
  const data = await apiFlex(
    "https://jsonplaceholder.typicode.com/posts/1"
  ).catch((err) => {
    console.error("Error:", err);
  });
  console.log(data);
})();
```

#### 🟢 GET Request with Optional Parameters

```javascript
import apiFlex from "api-flex";

const fetchData = async (url) => {
  return await apiFlex(url);
};

const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
console.log(data);
```

#### 🟢 GET Request with Custom Headers

```javascript
import apiFlex from "api-flex";

const headers = { Authorization: "Bearer my-token" };
const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1", {
  headers,
});
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

### 🟢 **GET Request with Custom Headers**

```javascript
import apiFlex from "api-flex";

const fetchWithHeaders = async () => {
  try {
    const data = await apiFlex("https://jsonplaceholder.typicode.com/posts", {
      headers: { Authorization: "Bearer my-token" },
    });
    console.log("Data with custom headers:", data);
  } catch (error) {
    console.error("Error fetching data with headers:", error);
  }
};

fetchWithHeaders();
```

### 🟢 **Handling Errors Gracefully**

```javascript
import apiFlex from "api-flex";

const fetchPostWithErrorHandling = async () => {
  try {
    const data = await apiFlex("https://api.somedomain.com/non-existent");
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error occurred:", error.message); // Custom error handling
  }
};

fetchPostWithErrorHandling();
```

---

### Example Usage for Caching

```javascript
import apiFlex from "api-flex";

const fetchUserWithCache = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: true, // Enable caching
    };

    const data = await apiFlex(
      "https://jsonplaceholder.typicode.com/posts/1",
      options
    );
    console.log("Cached User Data:", data);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

fetchUserWithCache();
```

---

# 📦 Integration with Different Frameworks and Libraries

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

Using `api-flex` in a React application is simple. You can call the API inside your functional components or within `useEffect` hooks.

#### Example:

```javascript
import React, { useEffect, useState } from "react";
import apiFlex from "api-flex";

const PostFetcher = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await apiFlex(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setPost(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostFetcher;
```

# `Vue.js` <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" width="30"/>

To use `api-flex` in a Vue.js application, you can call the API inside the `mounted` lifecycle hook or within methods.

#### Example:

```javascript
<template>
  <div>
    <h1 v-if="post">{{ post.title }}</h1>
    <p v-if="post">{{ post.body }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import apiFlex from "api-flex";

export default {
  data() {
    return {
      post: null,
      error: null,
    };
  },
  async mounted() {
    try {
      this.post = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>
```

# `Svelte`

In a Svelte application, you can call `api-flex` directly within the script tag of your component.

#### Example:

```html
<script>
  import apiFlex from "api-flex";
  import { onMount } from "svelte";

  let post = null;
  let error = null;

  onMount(async () => {
    try {
      post = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
    } catch (err) {
      error = err.message;
    }
  });
</script>

{#if error}
<p>Error: {error}</p>
{:else if post}
<h1>{post.title}</h1>
<p>{post.body}</p>
{/if}
```


---

## 📊 Comparison: `fetch`, `axios`, and `api-flex`

| Feature                  | `fetch`      | `axios`      | `api-flex`      |
| ------------------------ | ------------ | ------------ | --------------- |
| **Built-in retries**      | ❌           | ❌           | ✅              |
| **Token management**      | ❌ (manual)  | ❌ (manual)  | ✅ (automatic)  |
| **Centralized errors**    | ❌           | ❌           | ✅              |
| **Response caching**      | ❌           | ❌           | ✅              |
| **Timeout handling**      | ❌           | ✅           | ✅              |
| **Batch requests**        | ❌           | ❌           | ✅              |
| **Request/Response Interceptors** | ❌  | ✅           | ✅              |
| **Exponential backoff**   | ❌           | ❌           | ✅              |
| **Customizable defaults** | ❌           | ✅           | ✅              |
| **Environment detection** | ❌           | ❌           | ✅              |
| **Automatic rate-limiting handling** | ❌ | ❌         | ✅              |
| **Lightweight**           | ✅           | ❌           | ✅              |
| **Wide browser support**  | ✅           | ✅           | ✅              |

---

### Key Advantages of `api-flex` Over Other Libraries:
- **Batch Requests**: Unlike `fetch` or `axios`, `api-flex` supports batching multiple API requests into a single operation, reducing network overhead.
- **Automatic Token Management**: `api-flex` handles token refreshing and management automatically, streamlining the process of authenticated requests.
- **Built-in Retry Mechanism**: With built-in retry logic and support for exponential backoff, `api-flex` offers more robust error handling compared to the manual approaches in `fetch` and `axios`.
- **Rate Limiting Handling**: The rate-limiting feature in `api-flex` helps prevent API overuse, something `fetch` and `axios` don’t handle out-of-the-box.

This comparison emphasizes how `api-flex` provides a more feature-rich and developer-friendly experience, especially for large-scale or complex applications.
---


# 🚀 Features of Api-Flex

### Key Features

### **Batch Requests**

- **Batch Requests**:

  - Implement a feature that allows developers to batch multiple requests into a single API call. This reduces the number of network requests made, improving performance and efficiency, especially for applications making multiple simultaneous API calls.

  **Example:**

  ```javascript
  import apiFlex from "api-flex";

  const fetchBatchRequests = async () => {
    const urls = [
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://jsonplaceholder.typicode.com/posts/2",
      "https://jsonplaceholder.typicode.com/posts/3",
    ];

    // Directly use apiFlex to make batch requests
    const responses = await apiFlex.batch(urls);
    console.log("Fetched Batch Data:", responses);
  };

  fetchBatchRequests();
  ```

- The `batch` method allows you to pass an array of URLs, and it will execute all requests concurrently, returning the results in an array. Each response will contain the corresponding data for the respective request, making the process efficient and straightforward.

- **Flexible API Requests**

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

- **Automatic Retries**

  - Configurable retry logic to automatically attempt to re-fetch data in case of network failures or errors. Supports customizable retry counts and delays.

  **Example:**

  ```javascript
  import apiFlex from "api-flex";

  const fetchPostWithRetry = async () => {
    try {
      const data = await apiFlex(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          retries: 3, // Number of retries
          retryDelay: 1000, // Retry every 1 second
        }
      );
      console.log("Fetched Post with Retry:", data);
    } catch (error) {
      console.error("Error fetching post after retries:", error.message);
    }
  };

  fetchPostWithRetry();
  ```

- **Exponential Backoff**

  - Built-in support for exponential backoff strategy during retries, reducing the likelihood of overwhelming the server during temporary issues.

  **Example:**
  (This feature is implemented automatically in the retry feature.)

- **Caching Mechanism**

  - Optional caching to store responses and improve performance on subsequent requests. Easily configurable to enable or disable caching.

  **Example:**

  ```javascript
  import apiFlex from "api-flex";

  const fetchCachedPost = async () => {
    const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1", {
      cache: true, // Enable caching
    });
    console.log("Fetched Cached Post:", data);
  };

  fetchCachedPost();
  ```

- **Timeout Handling**

  - Customizable request timeout settings to prevent hanging requests and improve user experience.

  **Example:**

  ```javascript
  import apiFlex from "api-flex";

  const fetchPostWithTimeout = async () => {
    try {
      const data = await apiFlex(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          timeout: 2000, // Timeout in 2 seconds
        }
      );
      console.log("Fetched Post with Timeout:", data);
    } catch (error) {
      console.error("Error fetching post due to timeout:", error.message);
    }
  };

  fetchPostWithTimeout();
  ```

- **Token Management**

  - Automatic handling of authentication tokens, including token refreshing, ensuring secure API interactions.

  **Example:**

  ```javascript
  import apiFlex from "api-flex";

  const fetchProtectedResource = async () => {
    try {
      const data = await apiFlex("https://api.example.com/protected", {
        token: "your-authentication-token", // Set token for authorization
      });
      console.log("Fetched Protected Resource:", data);
    } catch (error) {
      console.error("Error fetching protected resource:", error.message);
    }
  };

  fetchProtectedResource();
  ```

- **Interceptor Support**

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

- **Rate Limiting Handling**

  - Automatically handles rate limiting responses from APIs (HTTP status 429). The library respects `Retry-After` headers and adjusts retry logic to avoid overwhelming the server.

  **Example:**

  ```javascript
  import apiFlex from "api-flex";

  const fetchWithRateLimitHandling = async () => {
    try {
      const data = await apiFlex("https://api.example.com/resource", {
        retries: 5, // Number of retries
        retryDelay: 1000, // Retry every 1 second
      });
      console.log("Fetched Data with Rate Limit Handling:", data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  fetchWithRateLimitHandling();
  ```

- **Environment Detection**

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

- **Configurable Defaults**

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
    const data = await apiClient(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Fetched Post with Default Configs:", data);
  };

  fetchDefaultPost();
  ```

- **Lightweight and Fast**

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
