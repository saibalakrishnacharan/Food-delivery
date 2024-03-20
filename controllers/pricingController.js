const PricingService = require('../services/pricingService');

class PricingController {
    static async calculatePrice(req, res) {
        const { organizationId, zone, total_distance, itemType } = req.body;
        try {
            const totalPrice = await PricingService.calculatePrice(organizationId, zone, total_distance, itemType);
            res.json({ total_price: totalPrice });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = PricingController;