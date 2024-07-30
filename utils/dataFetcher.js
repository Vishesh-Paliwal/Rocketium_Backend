const axios = require('axios');
const fs = require('fs');
const path = require('path');

const DATA_URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';
const DATA_FILE = path.join(__dirname, '..', 'data.json');
const DATA_FLAG_FILE = path.join(__dirname, '..', 'data_initialized.flag');

async function fetchData() {
  try {
    const response = await axios.get(DATA_URL);
    fs.writeFileSync(DATA_FILE, JSON.stringify(response.data, null, 2));
    fs.writeFileSync(DATA_FLAG_FILE, 'initialized');
    console.log('Data fetched and stored successfully.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function isDataInitialized() {
  return fs.existsSync(DATA_FLAG_FILE);
}

module.exports = { fetchData, isDataInitialized };
