const { getDataController } = require('../controllers/dataController');
const { getData } = require('../models/dataModel');

jest.mock('../models/dataModel');

describe('getDataController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      query: {}
    };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  test('should return data sorted by name in ascending order', () => {
    getData.mockReturnValue([
      { name: 'Alice', version: 2 },
      { name: 'Bob', version: 1 }
    ]);

    req.query.sortField = 'name';
    req.query.sortOrder = 'asc';

    getDataController(req, res);

    expect(res.json).toHaveBeenCalledWith([
      { name: 'Alice', version: 2 },
      { name: 'Bob', version: 1 }
    ]);
  });

  test('should return data filtered by language', () => {
    getData.mockReturnValue([
      { name: 'Alice', language: 'English' },
      { name: 'Bob', language: 'Spanish' }
    ]);

    req.query.filterfield = 'language';
    req.query.filter = 'English';

    getDataController(req, res);

    expect(res.json).toHaveBeenCalledWith([
      { name: 'Alice', language: 'English' }
    ]);
  });

  test('should handle invalid sortField gracefully', () => {
    getData.mockReturnValue([
      { name: 'Alice', version: 2 },
      { name: 'Bob', version: 1 }
    ]);

    req.query.sortField = 'nonexistentField';
    req.query.sortOrder = 'asc';

    getDataController(req, res);

    expect(res.json).toHaveBeenCalledWith([
      { name: 'Alice', version: 2 },
      { name: 'Bob', version: 1 }
    ]);
  });

  test('should handle filter with no matches gracefully', () => {
    getData.mockReturnValue([
      { name: 'Alice', language: 'English' },
      { name: 'Bob', language: 'Spanish' }
    ]);

    req.query.filterfield = 'language';
    req.query.filter = 'German';

    getDataController(req, res);

    expect(res.json).toHaveBeenCalledWith([]);
  });
});
