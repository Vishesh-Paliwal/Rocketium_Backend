const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const { isDataInitialized, fetchData } = require('./utils/dataFetcher');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');


const app = express();
const PORT = process.env.PORT || 3000;

if (!isDataInitialized()) {
  fetchData();
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
