const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${req.params.id}`
    );
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
