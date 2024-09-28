import express from "express";
import apiFlex from "../src/apiFlex.js";

const app = express();

app.get("/product", async (req, res) => {
  try {
    const product = await apiFlex.get(
      "https://jsonplaceholder.typicode.com/todos/1"
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
