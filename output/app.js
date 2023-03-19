"use strict";
class MiClaseEstatica {
    static MiMetodoEstatico() {
        console.log("Método Estático");
    }
    ;
}
class test {
    constructor(b, c) {
        this.b = b;
        this.c = c;
    }
}
const persona = {
    nombre: 'Jose',
    edad: 30,
    direccion: {
        calle: 'San Martin',
        pais: 'Argentina',
        ciudad: 'Cordoba'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
};
console.log(persona.mostrarDireccion());
console.log(persona.nombre + persona.edad);
