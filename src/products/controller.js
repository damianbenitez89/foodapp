const Producto = require('../models/productos');

const addProduct = async (req, res) => {
    const { nombre, precio, descripcion, categoria, cantidad, tamano } = req.body;
     try {
         const newProduct = new Producto({
             nombre: nombre,
             precio: precio,
             descripcion: descripcion,
             categoria: categoria,
             cantidad: cantidad,
             tamano: tamano
         })

         const productSaved = await newProduct.save();
         return res.status(200).json({ message: "post creado de manera exitosa" });
         
     } catch (error) {
         console.error(error);
     }
}

const obtenerProductos = async (req, res) => {
     try {
         const productos = await Producto.find()

        console.log(productos)         
     } catch (error) {
         console.error(error);
     }
}


const controller = {
    addProduct,obtenerProductos
};

module.exports = controller;