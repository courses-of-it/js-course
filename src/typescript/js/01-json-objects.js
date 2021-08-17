var bicicleta = {
    color: 'rojo',
    modelo: 'bmx',
    frenos: 'disco',
    velocidadMax: '60km',
    cambiaColor: function(newColor){
        this.color = newColor
        console.log(this)
    }
}

console.log(bicicleta)
bicicleta.cambiaColor('arcoiris')