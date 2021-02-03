const {
  getAllProject,
  findById,
  postOneProject,
  putOneProject,
  deleteOneProject,
} = require("../models/project");

module.exports.handleAllProject = async (req, res) => {
  const data = await getAllProject();
  res.send(data);
};

module.exports.handleOneProject = async (req, res) => {
  res.send(await findById(req.params.id));
};

module.exports.handleCreateProject = async (req, res) => {
  const { name, description, lien } = req.body;
  const image = req.file ? req.file.path : null;
  const data = await postOneProject({ name, image, description, lien });
  return res.status(201).send(data);
};

module.exports.handleUpdateProject = async (req, res) => {
  const { name, image, description, lien } = req.body;
  const attributes = { name, image, description, lien };
  const data = await putOneProject(req.params.id, attributes);
  res.send(data);
};

module.exports.handleDeleteProject = async (req, res) => {
  await deleteOneProject(req.params.id);
  return res.status(204);
};
