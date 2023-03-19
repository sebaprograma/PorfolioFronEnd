const deportistaObjeto = {
    nombre:"Messi",
    champions:4};
const deportista1 = '{"nombre":"Ronaldo","champions":3}';


console.log(deportistaObjeto);
console.log(JSON.stringify(deportistaObjeto));
console.log(deportista1);
console.log(JSON.parse(deportista1));

fetch('http://127.0.0.1:5500/pasajeros.json')
.then((Response) => Response.json())
.then((data) => console.log(data));

fetch('http://127.0.0.1:5500/pasajeros.json')
.then((Response) => Response.json())
.then((pasajeros) => {
    const nombresDePasajeros = pasajeros.
    map((pasajero) => pasajero.nombre);
    console.log(nombresDePasajeros);
});