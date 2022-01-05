'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = require('./app');


app.get('/', (req, res) => {
    res.send('Food API is running!');
});


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});