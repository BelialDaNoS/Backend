

// function mostrarLista(lista){
//     (lista.length < 1) ? console.log("Lista vacía") : console.table(lista)
// }

// mostrarLista(datos);

// (function(lista = [123,456,678]){
//     (lista.length < 1) ? console.log("Lista vacía") : console.table(lista)
// })();


class Contador {

    static contadorGlobal = 0;

    constructor(nombre){
        this.nombre = nombre;
        this.contadorIndividual = 0;
    }

    obtenerResponsable (){
        console.log(`El responsable es ${this.nombre}`)
    }

    obtenerCuentaIndividual(){
        console.log(`La cuenta individual de ${this.nombre} es de ${this.contadorIndividual} `)
    }

    obtenerCuentaGlobal(){
        console.log(`Cuenta Global: ${this.constructor.contadorGlobal}`)
    }

    contar(){
        this.contadorIndividual++
        this.constructor.contadorGlobal++
    }
}

const contador1 = new Contador("Pablo");
const contador2 = new Contador("Lauty");

contador1.contar();
contador2.contar();

console.log(`${contador1.nombre} : ${contador1.contadorIndividual}`);

console.log(`${contador2.nombre} : ${contador2.contadorIndividual}`);

contador1.obtenerCuentaGlobal();
