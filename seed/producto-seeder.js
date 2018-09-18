//Deberían usar strict en los archivos de javascript
//Sería bueno tener un comentario acerca de la función de este archivo
const Producto = require('../api/models/producto');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/facturaelectronica');
//Se podría usar let o const en vez de var
var product = new Producto({
    _id: new mongoose.Types.ObjectId(),
    nombre: 'Tratamiento Urgencia',
    descripcion: 'Se realizó un tratamiento de urgencia',
    precio: 350000
});

product.save(() => {
    mongoose.disconnect();
});

