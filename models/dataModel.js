const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..','data.json');

function getData() {
  try {
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
}

module.exports = { getData };
