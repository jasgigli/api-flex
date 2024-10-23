# Api-Flex

[![npm](https://img.shields.io/npm/dm/api-flex.svg)](https://www.npmjs.com/package/api-flex)
[![npm](https://img.shields.io/npm/v/api-flex.svg)](https://www.npmjs.com/package/api-flex)
[![License](https://img.shields.io/github/license/jasgigli/api-flex.svg)](https://github.com/jasgigli/api-flex/blob/main/LICENSE)

**`api-flex`** is a modern, powerful, and flexible library for handling API requests. It combines the simplicity of `fetch` with the power of `axios`, while introducing advanced features such as automatic retries, token management, centralized error handling, and in-memory response caching.

## 🚀 Key Features

- **Unified API**: Combines the best of both `fetch` and `axios`.
- **Automatic Retries**: Configurable retry mechanism for failed requests.
- **Token Management**: Easily manage authorization tokens.
- **Centralized Error Handling**: Built-in error logging and handling.
- **Response Caching**: Optional caching to improve performance for repeated requests.
- **Lightweight**: A small footprint with a powerful feature set.

## 📦 Installation

Install `api-flex` via npm:

```bash
npm install api-flex
```

## 🎯 Why Choose `api-flex`?

`api-flex` abstracts the complexity of API integrations, providing you with a robust and intuitive API to handle HTTP requests. No need to manually set up retries, caching, or token management—everything is handled out-of-the-box.

Here are several simplified syntax examples for using the `apiFlex` library to make `GET` requests. Each example demonstrates a different approach while maintaining clarity and simplicity:

---

# 💻 Usage

### 💻 Simple Examples for `GET` Requests

#### 🟢 Basic GET Request

```javascript
import apiFlex from "api-flex";

const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
console.log(data);
```

#### 🟢 Using `try-catch` with a Function

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

#### 🟢 Arrow Function Syntax

```javascript
import apiFlex from "api-flex";

const fetchUser = async () => {
  const data = await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
};

fetchUser();
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

# 📚 More Modern Usage Examples

## **GET Request**

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

## **POST Request**

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

## **PUT Request**

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

## **DELETE Request**

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

## 🟢 **GET Request with Custom Headers**

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

## 🟢 **Handling Errors Gracefully**

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

# 📦 Integration with Different Frameworks and Libraries

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

# `Angular` <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="30"/>

In Angular, you can create a service to encapsulate your API calls with `api-flex` and then inject that service into your components.

#### Example Service:

```typescript
import { Injectable } from "@angular/core";
import apiFlex from "api-flex";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  async fetchPost() {
    try {
      return await apiFlex("https://jsonplaceholder.typicode.com/posts/1");
    } catch (error) {
      throw new Error(error);
    }
  }
}
```

#### Example Component:

```typescript
import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-post",
  template: `
    <h1 *ngIf="post">{{ post.title }}</h1>
    <p *ngIf="post">{{ post.body }}</p>
    <p *ngIf="error">{{ error }}</p>
  `,
})
export class PostComponent implements OnInit {
  post: any;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      this.post = await this.apiService.fetchPost();
    } catch (err) {
      this.error = err.message;
    }
  }
}
```

# `Express` <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" width="30"/> or `Node.js` <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="30"/>

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

| Feature                | fetch       | axios       | api-flex       |
| ---------------------- | ----------- | ----------- | -------------- |
| **Built-in retries**   | ❌          | ❌          | ✅             |
| **Token management**   | ❌ (manual) | ❌ (manual) | ✅ (automatic) |
| **Centralized errors** | ❌          | ❌          | ✅             |
| **Response caching**   | ❌          | ❌          | ✅             |

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
