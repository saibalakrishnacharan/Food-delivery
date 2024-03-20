// index.js
const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./routes/pricingRoutes');
const PORT = process.env.PORT || 3000;
const { swaggerUi, specs } = require('./swagger');
const app = express();
const { client, connectDB } = require('./database');


app.use(express.json());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Use pricing routes
app.use('/api', pricingRoutes);



// Connect to the PostgreSQL database
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



