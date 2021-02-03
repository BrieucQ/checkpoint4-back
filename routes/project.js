const projectRouter = require("express").Router();
const asyncHandler = require("express-async-handler");
const {
  handleAllProject,
  handleOneProject,
  handleCreateProject,
  handleUpdateProject,
  handleDeleteProject,
} = require("../controllers/project.js");
const requireRequestBody = require("../middlewares/requireRequestBody.js");

projectRouter.get("/", asyncHandler(handleAllProject));
projectRouter.get("/:id", asyncHandler(handleOneProject));
projectRouter.post("/", requireRequestBody, asyncHandler(handleCreateProject));
projectRouter.put(
  "/:id",
  requireRequestBody,
  asyncHandler(handleUpdateProject)
);
projectRouter.delete(
  "/:id",
  requireRequestBody,
  asyncHandler(handleDeleteProject)
);

module.exports = projectRouter;
