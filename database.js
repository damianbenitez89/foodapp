const mongoose = require('mongoose');

//Production configuration!
const dproduction = process.env.DATABASE_URL;

//Production Database connection
const directConnection = async () => {
    mongoose.connect(dproduction, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const db = await mongoose.connection;
    db.on('error', console.error.bind(console, 'Error al intentar conectarse a la BD'));
    db.once('open', function() {
        console.log('Estamos conectados a la BD De Producción');
    });
};

/* Esta linea sera usada solo al momento de que se suba a produccion, y se debe de declarar el servicio que
se ha escogido directamente en el archivo de .env */

// directConnection();

//Develop Database connection
const DATABASE = process.env.DB_LOCAL

const startDatabase = async () => {
    mongoose.connect(DATABASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    const db = await mongoose.connection;
    db.on('error', console.error.bind(console, 'Error al intentar conectarse a la BD '));
    db.once('open', function() {
    console.log('Estamos conectados a la BD de Desarrollo');
});
}

startDatabase();