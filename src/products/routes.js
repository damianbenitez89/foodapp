const { Router } = require('express');
const router = Router();
const controller = require('./controller');


router.get('/productos', controller.obtenerProductos);
router.post('/productos', controller.addProduct);



module.exports = router;