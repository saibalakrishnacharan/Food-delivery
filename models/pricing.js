// models/pricing.js

const { fetch } = require('../database');
const client = require('../database');

class Pricing {
   static async findOneByOrganizationAndZoneAndItemType(organizationId, zone, itemType) {
        try {
            const query = `
            SELECT *
                FROM 
                    pricings p
                JOIN 
                    organizations o ON p.organization_id = o.id
                JOIN 
                    items i ON p.item_id = i.id
                WHERE
                    o.id = $1
                    AND p.zone = $2
                    AND i.type = $3 
                LIMIT 1;


          `;
          
            let fetcheddata = await fetch(query,organizationId,zone,itemType);
            return fetcheddata.rows;
        } catch (error) {
            throw new Error('Error fetching pricing: ' + error.message);
        }
   }
}

module.exports = Pricing;
