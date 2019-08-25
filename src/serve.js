const express = require("express");
const app = express();

const router = require("./routes");

let numberOfRequest = 0;
const logRequests = (req, res, next) => {
  numberOfRequest++;
  console.log(`Number Of Request: ${numberOfRequest}`);
  next();
};

app.use(express.json());
app.use(logRequests);
app.use(router);

app.listen(3333);
