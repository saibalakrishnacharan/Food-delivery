const Pricing = require('../models/pricing');
class PricingService {
    static async calculatePrice(organizationId, zone, totalDistance, itemType) {
        try {
            console.log("pricing",Pricing)
            const p= await Pricing.findOneByOrganizationAndZoneAndItemType(organizationId, zone, itemType);
            let pricing = p[0];
            console.log("pricings",pricing)
            if (!pricing) {
                throw new Error('Pricing not found for the given parameters');
            }

            let totalPrice = pricing.fix_price;
            if (totalDistance > pricing.base_distance_in_km) {
                totalPrice += (totalDistance - pricing.base_distance_in_km) * pricing.km_price;
            }
            console.log("total;",totalPrice)
            return totalPrice;
        } catch (error) {
            throw new Error('Error calculating price: ' + error.message);
        }
    }
}

module.exports = PricingService;