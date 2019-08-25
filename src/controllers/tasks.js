const fileJson = require("../services/fileJson");

class Tasks {
  store(req, res) {
    const data = fileJson.readFile();
    const { id } = req.params;
    const { title } = req.body;
    const dataAddTask = data.map(item =>
      item.id === id ? { ...item, tasks: [...item.tasks, title] } : item
    );
    fileJson.writeFile(dataAddTask);
    return res.status(201).json(dataAddTask);
  }
}

module.exports = new Tasks();
