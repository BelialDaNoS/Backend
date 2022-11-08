class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }


    getFullName() {
        console.log(`Expediente secreto de: Nombre: ${this.nombre} Apellido: ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        void this.mascotas.push({ nombreMascota });
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(libroNombre, autor) {
        this.libros.push({ libroNombre, autor });
    }

    getBookNames() {
        return this.libros.map(libro => libro.libroNombre);
    }
}



// Declaración de usuarios ↴↴↴↴↴↴↴↴

const usuario1 = new Usuario("Lautaro", "Gazzo", [], []);

usuario1.addBook("Harry Potter", "José José");
usuario1.addMascota("Mia")

// Declaración y ejecución de funciones ↴↴↴↴↴↴↴↴↴

usuario1.getFullName();

infopersona(usuario1);


function infopersona(usuario){
    console.log(`Su nombre es ${usuario.apellido}, ${usuario.nombre} ${usuario.apellido} y es el mejor agente secreto. Le gusta leer libros como ${usuario.getBookNames()} y tiene en total ${usuario.countMascotas()} mascotas.`)
}


