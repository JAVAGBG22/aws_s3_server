const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const uploadImageRoutes = require("./routes/upload");

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json({ limit: "5mb", type: "application/json" }));
app.use(cookieParser());

app.use("/api", uploadImageRoutes);

app.get("/api/hello/", (req, res) => {
  res.send("Hello :)");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
