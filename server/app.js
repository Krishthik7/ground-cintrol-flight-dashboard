const dbPool = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const spaceXRouter = require("./routes/spaceXRouter");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const rows = await dbPool.query("SELECT * FROM spaceData");
  res.status(200);
  res.send({
    result: JSON.stringify(rows),
  });
});

app.use("/spaceX", spaceXRouter);

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
