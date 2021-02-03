const db = require("../db.js");
const { RecordNotFoundError } = require("../error-types");
const definedAttributesToSqlSet = require("../helpers/definedAttributesToSqlSet.js");

const getAllProject = async () => {
  return db.query("SELECT * FROM projects");
};

const findById = async (id, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM projects WHERE id = ?", [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const postOneProject = async (formData) => {
  return db
    .query(
      `INSERT INTO projects SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((res) => findById(res.insertId));
};

const putOneProject = async (id, formData) => {
  const attribute = definedAttributesToSqlSet(formData);
  return db
    .query(`UPDATE projects SET ${attribute} WHERE id = :id`, {
      ...formData,
      id,
    })
    .then(() => findById(id));
};

const deleteOneProject = async (id) => {
  await db.query("DELETE FROM projects WHERE id = ?", id);
};

module.exports = {
  getAllProject,
  findById,
  postOneProject,
  putOneProject,
  deleteOneProject,
};
