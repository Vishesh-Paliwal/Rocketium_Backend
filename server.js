const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const { isDataInitialized, fetchData } = require('./utils/dataFetcher');

const app = express();
const PORT = process.env.PORT || 3000;

if (!isDataInitialized()) {
  fetchData();
}

app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
