import express from "express";
import bodyParser from "body-parser";

const app = express();

import cors from "cors";
// const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [];
console.log(users);

// Register endpoints
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  users.push({ username, email, password });
  res.json({
    message: "User registerd sucessfully",
  });
});

//Login endpoints

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.json({ message: "Login sucessful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
