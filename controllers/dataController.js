const { getData } = require('../models/dataModel');

function getDataController(req, res) {
  let data = getData();
  const { sort, filter } = req.query;

  if (filter) {
    data = data.filter(item => item.someField === filter);
  }

  if (sort) {
    data.sort((a, b) => (a.someField > b.someField ? 1 : -1));
  }

  res.json(data);
}

module.exports = { getDataController };
