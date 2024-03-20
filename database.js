const { Client } = require('pg');
const client = new Client({
  user: 'postgresql_vd9t_user',
  host: 'dpg-cnsls35a73kc73b5j600-a.oregon-postgres.render.com',
  database: 'postgresql_vd9t',
  password: 'LQBl4QflqN0tSt2hqQbUv6ePmJUJV8cA',
  port: 5432,
  ssl: {
    ca: '',
    key: '',
    cert: '',
    rejectUnauthorized: false // Set to true to reject unauthorized connections (recommended)
  }
});

// Connect to the PostgreSQL database
async function connectDB() {
    try {
      await client.connect();
      console.log('Connected to PostgreSQL database');
    } catch (error) {
      console.error('Error connecting to PostgreSQL database:', error);
    }
  }

async function fetch(query,organizationId,zone,itemType){
    try{
       let items = await client.query(query,[organizationId,zone,itemType]);
       return items;
    }
    catch(err){
        console.log("error in fetching query",query)
    }
}
  module.exports = { client, connectDB ,fetch};