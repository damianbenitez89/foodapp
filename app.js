const express = require('express');
const db = require('./database');
const app = express();
const producto = require('./src/products/routes');







//Middlewares
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json());
//app.use(cors);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
});


// Rutas
app.use(producto);


// start the database!
const startDatabase = async () => {
    try {
        await db;
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
startDatabase();

module.exports = app;