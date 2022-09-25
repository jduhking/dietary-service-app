const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const routes = require("./routes")(express);
app.use(routes);

const Patient = require('./models/Patient.js')
app.get("/", async (req, res) => {
	console.log("Network hit");
	const patients = await Patient.find();
	console.log(patients);
  return res.status(200).send("On the network!");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
