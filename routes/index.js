const projectRouter = require("./project");

module.exports = (app) => {
  app.use("/Project", projectRouter);
};
