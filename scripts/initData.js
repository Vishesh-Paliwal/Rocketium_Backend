const { fetchData, isDataInitialized } = require('../utils/fetchData');

(async () => {
  if (!isDataInitialized()) {
    await fetchData();
  } else {
    console.log('Data already initialized.');
  }
})();
