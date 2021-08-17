//programacion orientada ha objetos

interface CamisetaBase{
    setColor(color)
    getColor()
}

//decorador
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            document.write('LOL' + logo)
        }
    }
}

// classe (molde)

class Camiseta implements CamisetaBase{
    //propiedades (caracteristicas)
    private color: string
    private modelo: string
    private marca: string
    private talla: string
    private precio: string
    
    //metodos (funciones o acciones)
    constructor(color, modelo, marca, talla, precio){
        this.color = color
        this.modelo = modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio

    }
    
    public setColor(valor){
        this.color = valor
    }

    public getColor(){
        return this.color
    }
}

//clase hija

class Sudadera extends Camiseta{
    private hoddie: boolean
    setCapucha(capuha: boolean){
        this.hoddie = capuha
    }

    public getHoddie(){
        return this.hoddie
    }
}

var nikeHoddie = new Sudadera("rojo y negra", "manga larga", "nike", "XXL", "50")
nikeHoddie.setCapucha(true)
console.log(nikeHoddie)


var camiseta = new Camiseta("rojo", "manga larga", "nike", "m", "10")

console.log(camiseta)

