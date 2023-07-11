/**
 * @swagger
 * tags:
 *   name: Calculator
 *   description: API endpoints for performing calculations
 */
/**
/**
 * @swagger
 * /calculator/add:
 *   post:
 *     summary: Add two numbers
 *     description: Adds two numbers and returns the result.
 *     tags: [Calculator]
 *     parameters:
 *       - in: path
 *         name: num1
 *         schema:
 *           type: number
 *         required: true
 *         description: The first number to add.
 *       - in: path
 *         name: num2
 *         schema:
 *           type: number
 *         required: true
 *         description: The second number to add.
 *     responses:
 *       200:
 *         description: Addition successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *               example:
 *                 result: 8
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /calculator/subtract:
 *   post:
 *     summary: Subtract two numbers
 *     description: Subtracts the second number from the first number and returns the result.
 *     tags: [Calculator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num1:
 *                 type: number
 *               num2:
 *                 type: number
 *             example:
 *               num1: 10
 *               num2: 3
 *     responses:
 *       200:
 *         description: Subtraction successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *               example:
 *                 result: 7
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /calculator/multiply:
 *   post:
 *     summary: Multiply two numbers
 *     description: Multiply the second number from the first number and returns the result.
 *     tags: [Calculator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num1:
 *                 type: number
 *               num2:
 *                 type: number
 *             example:
 *               num1: 2
 *               num2: 2
 *     responses:
 *       200:
 *         description: Multiplication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *               example:
 *                 result: 4
 *       400:
 *         description: Bad request
 */


/**
 * @swagger
 * /calculator/divide:
 *   post:
 *     summary: Divide two numbers
 *     description: Divide the second number from the first number and returns the result.
 *     tags: [Calculator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num1:
 *                 type: number
 *               num2:
 *                 type: number
 *             example:
 *               num1: 4
 *               num2: 2
 *     responses:
 *       200:
 *         description: Divison successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *               example:
 *                 result: 2
 *       400:
 *         description: Bad request
 */

const express = require('express');
const router = express.Router();

const calculatorRoutes = require('./calculator');
const fileSysRoutes = require('./filesys');

router.use('/calculator', calculatorRoutes);
router.use('/filesys', fileSysRoutes);

module.exports = router;
