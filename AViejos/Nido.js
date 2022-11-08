// const operacion = (a, b , callBack) => {
//     return callBack(a,b)
// }

// const suma=(a,b)=> a+b;
// const resta=(a,b)=> a-b;
// const multi=(a,b)=> a*b;
// const div=(a,b)=> a/b;
// const mod=(a,b)=> a%b;

// const resultado = (a,b,oper) => {
//     console.log(`El resultado de tu operación es ${operacion(a,b,oper)} `)
// }

// resultado(5,2,resta)


// const escribirArchivo = require ('./escrArch.js')
// console.log('inicio del programa')

// escribirArchivo('hola mundo', () => {
// console.log('terminé de escribir el archivo')
// })

// console.log('fin del programa')

const fin = () => console.log("Terminé")

const mostrarLetras = (palabra, terminar) => {
    let i = 0;
    const timer = setInterval(() => {
        if(i<palabra.length){
            console.log(palabra[i]);
            i++;
        }else{
            terminar(fin)
            clearInterval(timer);

        }
    }, 1000);
}

setTimeout(() => {
    mostrarLetras("¡Hola!",fin)
}, 0);

setTimeout(() => {
    mostrarLetras("¡Hola!",fin)
}, 250);

setTimeout(() => {
    mostrarLetras("¡Hola!",fin)
}, 500);