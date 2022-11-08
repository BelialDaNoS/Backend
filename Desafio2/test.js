const Contenedor = require('./index.js')


const item1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    id:1
}

const item2 = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    id:2
}
const item3 = {
    title: "Globo Terraqueo",
    price: 345.67,
    thumbnail: "https: //cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    id:3
}


async function main(){
    const contenedor = new Contenedor('./productos.txt')
    let datos = await contenedor.getAll()
    console.log(datos)

    let id1 = await contenedor.save(item1)
    console.log(id1)

    let id2 = await contenedor.save(item2)
    console.log(id2)

    let datos2 = await contenedor.getAll()
    console.log(datos2)

    let buscador = await contenedor.getById(3)
    console.log(buscador)

    let borrarTodo = await contenedor.deleteAll()

    let borrarPorId = await contenedor.deleteById(2)

}



main()