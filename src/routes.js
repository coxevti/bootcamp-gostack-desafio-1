const express = require("express");
const router = express.Router();

const Projects = require("./controllers/projects");
const Tasks = require("./controllers/tasks");

const fileJson = require("./services/fileJson");

const checkIdExist = (req, res, next) => {
  const data = fileJson.readFile();
  const { id } = req.params;
  if (!data.includes(id)) {
    return res.status(400).json({ message: "The id not found." });
  }
  return next();
};

router.get("/projects", Projects.index);
router.post("/projects", Projects.store);
router.post("/projects/:id/task", checkIdExist, Tasks.store);
router.put("/projects/:id", checkIdExist, Projects.update);
router.delete("/projects/:id", checkIdExist, Projects.destroy);

module.exports = router;
