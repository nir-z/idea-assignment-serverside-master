

class userController {
  static loadEntries(infra) {
    console.log("lading users controller apis.");
    const { app, db } = infra;

    if (!app) return;

    const routes = [
      {
        path: "/login",
        method: "post",
        callback: async (req, res, next) => {
          const { app, logger, db } = infra;
          console.log("request: " + req.body.username);
          const result = await db.authenticateUser(req.body.username, req.body.password).catch(
            (err) =>{
                res.send(401,'Login failed');
              }
            );

          console.log("result: " + result);
          res.json(result);

        }
      }
    ];

    routes.forEach(route => {
      app.insertEP(route);
    });
  }
}

module.exports = {
  load: userController.loadEntries
};
