log = p => console.log(p)

const moment = require('moment')

const hoy = moment()

const nacimiento = moment("02/11/96", "DD/MM/YY")

const difDias = hoy.diff(nacimiento, "years")

log(difDias)