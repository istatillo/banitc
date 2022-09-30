require("dotenv").config();
const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const config = require("./config");
const { port, allowedDomains } = config;

// Mongo db connect
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Baza ulandi");
  });

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(require("cors")({ origin: allowedDomains, credentials: true }));

app.use(require("helmet")());

app.use(require("compression")());

app.use("/api", require("./routes/api"));

// app.use("/auth", require("./routes/auth"))

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server run ${port}`);
});
