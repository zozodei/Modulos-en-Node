//Ejercicio 1

import fs from 'fs';

/*  const contenido = fs.readFileSync('productos.json', 'utf-8');
const productos = JSON.parse(contenido);

productos.forEach(e => {
    console.log(`Producto: ${e.nombre}
        Precio: ${e.precio}
        Id: ${e.id}`);
});  */

//Ejercicio 2

/*const agregarProducto = (nombre, precio) => 
    {

        const contenido = fs.readFileSync('productos.json', 'utf-8');
        const productos = JSON.parse(contenido);

        const nuevoId = productos[productos.length -1].id +1 ;

        const nuevoProducto = 
        {
            id: nuevoId,
            nombre: nombre,
            precio: precio
        }
        
         productos.push (nuevoProducto);

        fs.writeFileSync (`productos.json`, JSON.stringify (productos, null, 2));

   

    }

    agregarProducto("Hamburguesa", 30000); */
    
    