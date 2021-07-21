require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const acctRoutes = require("./routes/accounts");
app.use("/", acctRoutes);


module.exports = app;