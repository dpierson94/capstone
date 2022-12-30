
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const invasives = require("./routers/invasives");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.get("/users/:id", (request, response) => {
  const id = request.params.id;
  response.send(JSON.stringify({ user_id: id }));
});

app.get("/weather/:city", (request, response) => {
  const city = request.params.city;
response.send(
    JSON.stringify({ current: `The weather in ${city} is 73 degrees today.` })
  );
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

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
