const { getData } = require('../models/dataModel');

function getDataController(req, res) {
  let data = getData();
  const { sortField, sortOrder = 'asc', filterfield ,filter } = req.query;

  if (filterfield==="id") {
    data = data.filter(item => item.id === filter);
  }
  if (filterfield==="name") {
    data = data.filter(item => item.name === filter);
  }
  if (filterfield==="language") {
    data = data.filter(item => item.language === filter);
  }
  if (filterfield==="bio") {
     data = data.filter(item => item.bio === filter);
  }
  if (filterfield==="version") {
     data = data.filter(item => item.version === filter);
  }

  if (sortField) {
    data.sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  res.json(data);
}

module.exports = { getDataController };
