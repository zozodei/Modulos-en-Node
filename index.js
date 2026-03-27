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

    /*import axios from 'axios';

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
    */

    //Ejercicio 5

    /*const buscarProducto = (nombreProd) => {
        const contenido = fs.readFileSync('productos.json', 'utf-8');
        const productos = JSON.parse(contenido);
        let existe = false;
        let i = 0;
        do
        {
            if (productos[i].nombre != nombreProd){
                i++
            }
            else{
                existe = true;
                console.log(`El producto ${nombreProd} sale $${productos[i].precio}`)
            }

        }
        while(!existe && i < productos.length)
    }
    buscarProducto("Mouse");*/

    //Ejercicio 6

    /*const contenido = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(contenido);


    let csv = "nombre, precio";


    productos.forEach(producto => {
        csv += `${producto.nombre},${producto.precio}`;
    });


    fs.writeFileSync (`productos.csv`, csv);*/

    //Ejercicio 7
    /*
    let numero = 1;

    let intervalo = setInterval(() => {
        console.log(numero);

        if (numero === 10) {
            console.log("Fin del contador");
            clearInterval(intervalo);
        }

        numero++;
    }, 1000);
    */

    //Ejercicio 8

    /*const analizarTexto = (texto) =>{
        texto = texto.toLowerCase();
        let cantidadCaracteres = 0;
        let cantidadPalabras = 0;
        let cantidadVocales = 0;
        let cantidadConsonantes = 0;
        for (let e of texto)
            {
                cantidadCaracteres++;
                if ("abcdefghijklmnñopqrstuvwxyz".includes(e)){
                if ("aeiou".includes(e))
                    {
                        cantidadVocales++;;
                    }
                    else{
                        cantidadConsonantes++;
                    }
                }
            }

            cantidadPalabras = texto.trim().split(" ").length;

        console.log(`Caracteres: ${cantidadCaracteres}
            Vocales: ${cantidadVocales}
            Consonantes: ${cantidadConsonantes}
            Palabras: ${cantidadPalabras}`);
    }

    analizarTexto("Hola mundo soy manunu");*/


    //Ejercicio 9

    /*async function validarPasword (pasword)
    {


        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    
        if (regex.test(pasword))
            {
                console.log ("contraseña valida");


            } else
                {
                    console.log("Pasword invalidad");
                
                }


    }

    validarPasword("zoeymanu91212A")*/