// this is the bootstrap file for our application
require("dotenv").config();

const app = require("../../services/api");
const usersController = require("../../services/users-controller");
const db = require("../../services/db-connector");

app.loadApi();
const infra = { app };
db.connect(infra);
usersController.load(infra);

