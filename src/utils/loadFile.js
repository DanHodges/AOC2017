const fs = require("fs");

module.exports = function loadFile(path) {
  return fs.readFileSync(path, "utf8").trim();
};
