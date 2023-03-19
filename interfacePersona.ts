interface IPersona {
    nombre: string;
    edad: number;
    direccion:{
        calle: string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion: () => string;
}

const persona: IPersona = {
    nombre: 'Jose',
    edad: 30,
    direccion: {
        calle: 'San Martin',
        pais: 'Argentina',
        ciudad: 'Cordoba'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.ciudad+', '+this.direccion.pais
    }
}

console.log(persona.mostrarDireccion());
console.log(persona.nombre+persona.edad);