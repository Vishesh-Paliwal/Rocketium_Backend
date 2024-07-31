const express = require('express');
const { getDataController } = require('../controllers/dataController');

const router = express.Router();
/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Retrieve a list of data items
 *     description: Retrieve a list of data items with optional sorting and filtering.
 *     parameters:
 *       - in: query
 *         name: sortField
 *         schema:
 *           type: string
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Order to sort (asc or desc)
 *       - in: query
 *         name: filterfield
 *         schema:
 *           type: string
 *         description: Field to filter by
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *         description: Value to filter by
 *     responses:
 *       200:
 *         description: A list of data items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: Adeel Solangi
 *                   language:
 *                     type: string
 *                     example: Sindhi
 *                   id:
 *                     type: string
 *                     example: V59OF92YF627HFY0
 *                   bio:
 *                     type: string
 *                     example: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum."
 *                   version:
 *                     type: number
 *                     example: 6.1
 */

router.get('/data', getDataController);

module.exports = router;
