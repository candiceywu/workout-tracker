const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const routes = require('./controllers/apiRoutes');
const frontEndRoutes = require('./controllers/frontEndRoutes');

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(routes);
app.use(frontEndRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});