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
    
    
//Ejercicio 3

/*import dayjs from 'dayjs';

const fechaHoy = () => 
    {   
        console.log(`Fecha: ${dayjs().format('DD/MM/YYYY')}`);
        console.log(`Hora: ${dayjs().format('HH:mm:ss')}`)
    }
fechaHoy();*/



//Ejercicio 4

import axios from 'axios';

async function obtenerPais(pais) {
    const url = `https://restcountries.com/v3.1/name/${pais}`;
    const response = await axios.get(url);

    const infoPais = response.data[0];

    console.log("País:", infoPais.name.common);
    console.log("Capital:", infoPais.capital[0]);
    console.log("Región:", infoPais.region);
    console.log("Población:", infoPais.population);
}
obtenerPais("Argentina");