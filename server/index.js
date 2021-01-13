const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

// logging middleware
app.use(morgan("dev"));

// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
