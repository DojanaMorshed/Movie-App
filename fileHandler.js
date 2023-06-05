const fs = require('fs').promises;

async function readJSONFile(filename) {
  let data = await fs.readFile(filename, 'utf-8');
  let jsonData = JSON.parse(data);
  return jsonData;
}

async function writeJSONFile(filename, data) {
  let jsonData = JSON.stringify(data, null, 2);
  await fs.writeFile(filename, jsonData, 'utf-8');
}

module.exports = {
  readJSONFile,
  writeJSONFile
};
