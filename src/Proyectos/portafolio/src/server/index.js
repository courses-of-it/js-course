'use strict'

const mongoose = require('mongoose')
const app = require('./app')
var port = 400

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true })
    .then(() => {
        console.log('conexion establecida')
            //creacion del server

        app.listen(port, () => {
            console.log('server arrancado en el puerto ' + port)
        })
    })
    .catch(err => console.log(err))