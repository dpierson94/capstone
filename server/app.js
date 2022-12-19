
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const invasives = require("./routers/invasives");

dotenv.config();

const PORT = process.env.PORT || 4040;

const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.get("/users/:id", (request, response) => {
  const id = request.params.id;
  response.send(JSON.stringify({ user_id: id }));
});

app.post("/add", (request, response) => {
  console.log("body", request.body);
  const num1 = request.body.numberOne;
  const num2 = request.body.numberTwo;
  const responseBody = {
    sum: num1 + num2
  };
  response.json(responseBody);
});

app.use("/invasives", invasives);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
