const moment = require('moment')
const http = require('http')
const express = require('express')
log = p => console.log(p)
moment.locale("es-mx");

const app = express ()




PORT=8080

const server = http.createServer((peticion,respuesta)=> {
    let currenthour= moment().format("HH");

    let texto = "-";

    if(currenthour>= 6 && currenthour<=12){
        texto = "Buenos dias"
    }

    else if(currenthour>13 && currenthour<=19){
        texto = "Buenas tardes"
    }
        
    else {
        texto = "Buenas noches"
    }

respuesta.end(texto)

})

const connectedserver = server.listen(PORT, () => {
    log(`Servidor escuchando en el puerto ${connectedserver.address().port}`)
})

