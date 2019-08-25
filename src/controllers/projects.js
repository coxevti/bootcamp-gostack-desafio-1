const fileJson = require("../services/fileJson");
const crypto = require("crypto");

class Projects {
  index(req, res) {
    return res.json(fileJson.readFile());
  }

  store(req, res) {
    const data = fileJson.readFile();
    const { title, tasks } = req.body;
    data.push({
      id: crypto.randomBytes(16).toString("hex"),
      title,
      tasks
    });
    fileJson.writeFile(data);
    return res.json();
  }

  update(req, res) {
    const data = fileJson.readFile();
    const dataUpdate = data.map(item =>
      item.id === id ? { ...item, title: req.body.title } : item
    );
    fileJson.writeFile(dataUpdate);
    return res.json();
  }

  destroy(req, res) {
    const data = fileJson.readFile();
    const { id } = req.params;
    const dataDelete = data.filter(item => item.id !== id);
    fileJson.writeFile(dataDelete);
    return res.json();
  }
}

module.exports = new Projects();
