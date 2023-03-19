var persona = {
    nombre: 'Jose',
    edad: 30,
    direccion: {
        calle: 'San Martin',
        pais: 'Argentina',
        ciudad: 'Cordoba'
    },
    mostrarDireccion: function () {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
};
console.log(persona.mostrarDireccion());
