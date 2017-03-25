//una funcion basica
function funcionBasica() {
	console.log('FUNCION BASICA SE EJECUTO');
}
funcionBasica();
//una funcion como declaracion, con argumentos y retorno
function suma(a, b) {
	return a + b;
}
console.log(suma(10, 15));
//funcion como expresion
var multiplica = function (a,b) {
	return a * b;
};
console.log(multiplica(10,15));

var lang = 'es';
function accesoContexto() {
	
	console.log ('en el contexto superior:', lang);
}
accesoContexto();

//método de un objeto

var agente ={
	nombre: 'Smith',
	saluda: function() {
		console.log('hola, soy el agente ' + this.nombre);
		
	}
	
}
agente.saluda();

//constructor de objetos
function Fruta(nombre) {
	
	this.getNombre = function () {
		return nombre;
	};
	this.setNombre = function (valor){
		nombre = valor;
	}
}
//crear un objeto fruta
var limon = new Fruta('Citrus limon');
console.log(limon);
console.log(limon.getNombre());
	
limon.setNombre('Manzana');
console.log(limon.getNombre());

