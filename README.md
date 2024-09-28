# Api-Flex

[![npm](https://img.shields.io/npm/dm/api-flex.svg)](https://www.npmjs.com/package/api-flex)
[![npm](https://img.shields.io/npm/v/api-flex.svg)](https://www.npmjs.com/package/api-flex)
[![GitHub issues](https://img.shields.io/github/issues/your-username/api-flex.svg)](https://github.com/jasgigli/api-flex/issues)
[![Build Status](https://img.shields.io/travis/jasgigli/api-flex.svg)](https://travis-ci.org/jasgigli/api-flex)
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

## 💻 Usage

### 🧩 Simplified API Example

Making a simple `GET` request is as easy as:

```javascript
import apiFlex from "api-flex";

async function fetchUser() {
  try {
    const data = await apiFlex.get("https://api.example.com/user/12345");
    console.log("User data:", data);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

fetchUser();
```

## 📚 Real-World Use Cases

- **User Profiles**: Manage user data and profiles from your APIs with ease.
- **E-commerce Applications**: Fetch and update product listings, inventories, or order details.
- **Analytics Dashboards**: Pull in analytical data from multiple sources, with error handling and caching.
- **Dynamic SPAs**: Load dynamic content in your Single Page Applications with smooth, cached API calls.

## ⚙️ Advanced Examples

### 🟢 **GET Request with Caching**

```javascript
import apiFlex from "api-flex";

// GET request with 5-minute cache enabled
apiFlex
  .get("https://jsonplaceholder.typicode.com/posts/1", {}, true)
  .then((data) => console.log("Post data:", data))
  .catch((err) => console.error("Error:", err));
```

### 🟢 **POST Request with Data**

```javascript
import apiFlex from "api-flex";

// POST request to create a new resource
apiFlex
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "This is a new post.",
    userId: 1,
  })
  .then((data) => console.log("Created Post:", data))
  .catch((err) => console.error("Error:", err));
```

### 🟢 **PUT Request to Update Data**

```javascript
import apiFlex from "api-flex";

// PUT request to update a resource
apiFlex
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "Updated Title",
    body: "Updated body content",
    userId: 1,
  })
  .then((data) => console.log("Updated Post:", data))
  .catch((err) => console.error("Error:", err));
```

### 🟢 **DELETE Request**

```javascript
import apiFlex from "api-flex";

// DELETE request to remove a resource
apiFlex
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(() => console.log("Post deleted successfully."))
  .catch((err) => console.error("Error:", err));
```

### 🟢 **GET Request with Custom Headers**

```javascript
import apiFlex from "api-flex";

// GET request with custom headers (e.g., Authorization)
apiFlex
  .get(
    "https://jsonplaceholder.typicode.com/posts",
    { Authorization: "Bearer my-token" },
    false
  )
  .then((data) => console.log("Data with custom headers:", data))
  .catch((err) => console.error("Error:", err));
```

### 🟢 **Retry Logic Example**

```javascript
import apiFlex from "api-flex";

// GET request with retries
apiFlex
  .get("https://api.somedomain.com/unreliable-endpoint", {}, true)
  .then((data) => console.log("Data after retries:", data))
  .catch((err) => console.error("Error after retries:", err));
```

### 🟢 **Handling Timeouts**

```javascript
import apiFlex from "api-flex";

// GET request with timeout of 2 seconds
apiFlex
  .get("https://jsonplaceholder.typicode.com/posts", { timeout: 2000 })
  .then((data) => console.log("Data received:", data))
  .catch((err) => console.error("Timeout Error:", err));
```

### 🟢 **Dynamic Token Management**

```javascript
import apiFlex from "api-flex";

// Set token dynamically
apiFlex.setToken("my-dynamic-token");

// GET request with token
apiFlex
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log("Data with token:", data))
  .catch((err) => console.error("Error:", err));
```

## 🌐 Express Integration with `api-flex`

You can use `api-flex` in a Node.js/Express environment effortlessly:

```javascript
import express from "express";
import apiFlex from "api-flex";

const app = express();

app.get("/product", async (req, res) => {
  try {
    const product = await apiFlex.get(
      "https://jsonplaceholder.typicode.com/products/1"
    );
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(500).send("Failed to fetch product.");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

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

## 📜 License

MIT License. See [LICENSE](https://github.com/jasgigli/api-flex/blob/main/LICENSE) for details.

## 🤝 Contributing

Feel free to submit issues or pull requests on [GitHub](https://github.com/jasgigli/api-flex). Contributions are welcome!
