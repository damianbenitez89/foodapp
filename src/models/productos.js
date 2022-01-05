const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const productosSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: { 
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    cantidad : {
        type: Number,
        required: true
    },
    tamano: {
        type: String,
        required: false
    }
},  {collection : 'Productos', timestamps: true });


module.exports = model('Productos', productosSchema);