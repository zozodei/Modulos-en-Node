//ejercicio 1

import fs from 'fs';

const contenido = fs.readFileSync('productos.json', 'utf-8');
const productos = JSON.parse(contenido);

productos.forEach(e => {
    console.log(`Producto: ${e.nombre}
        Precio: ${e.precio}
        Id: ${e.id}`);
});