// routes/pricingRoutes.js

/**
 * @swagger
 * tags:
 *   name: Pricing
 *   description: API endpoints for calculating delivery prices
 */
const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');

/**
 * @swagger
 * /api/calculate-price:
 *   post:
 *     summary: Calculate delivery price
 *     description: Calculate the total price for delivering food items based on various factors.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 description: Zone for delivery.
 *               organization_id:
 *                 type: string
 *                 description: Organization ID.
 *               total_distance:
 *                 type: number
 *                 description: Total distance for delivery (in km).
 *               item_type:
 *                 type: string
 *                 description: Type of food item (perishable/non-perishable).
 *             required:
 *               - zone
 *               - organization_id
 *               - total_distance
 *               - item_type
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   description: Total price for the delivery.
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.post('/calculate-price', pricingController.calculatePrice);

module.exports = router;
