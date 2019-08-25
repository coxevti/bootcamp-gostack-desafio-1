const fs = require("fs");
const path = require("path");

const pathFile = path.resolve(__dirname, "..", "services", "projects.json");

module.exports = {
  readFile: function() {
    const file = fs.readFileSync(
      path.resolve(__dirname, "..", "services", "projects.json")
    );
    return JSON.parse(file);
  },
  writeFile: function(fileJson) {
    fs.writeFileSync(
      path.resolve(__dirname, "..", "services", "projects.json"),
      JSON.stringify(fileJson)
    );
  }
};
