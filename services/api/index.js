const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
// 1. listen to port
// 2. load entries

const app = express();
// access env var
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const port = process.env.PORT || 2000;
function loadApi() {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {

      console.log("port " + port);
      resolve();
    });
  });
}

function insertEP(route) {
  const { method, path, callback } = route;
  console.log("inserting route");
  app[method](path, callback);
  //app.get("/users",()..)
}
module.exports = {
  loadApi,
  insertEP
};
