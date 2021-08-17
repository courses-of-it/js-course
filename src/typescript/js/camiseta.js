//programacion orientada ha objetos
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            document.write('LOL' + logo);
        };
    };
}
// classe (molde)
var Camiseta = /** @class */ (function () {
    //metodos (funciones o acciones)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (valor) {
        this.color = valor;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
//clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capuha) {
        this.hoddie = capuha;
    };
    Sudadera.prototype.getHoddie = function () {
        return this.hoddie;
    };
    return Sudadera;
}(Camiseta));
var nikeHoddie = new Sudadera("rojo y negra", "manga larga", "nike", "XXL", "50");
nikeHoddie.setCapucha(true);
console.log(nikeHoddie);
var camiseta = new Camiseta("rojo", "manga larga", "nike", "m", "10");
console.log(camiseta);
