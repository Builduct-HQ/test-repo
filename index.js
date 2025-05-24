const express = require("express");
const axios = require("axios");
const { logger } = require("./middlewares/logger.js");
const todoRoutes = require("./routes/todos.js");
const userRoutes = require("./routes/users.js");

const app = express();
const PORT = 6000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
