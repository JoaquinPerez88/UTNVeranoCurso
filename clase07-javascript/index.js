
console.log('================================================');
//Comentario

/**
 * Comentario de 
 * varias 
 * líneas
 */

//Variables: espacios de memoria que en algún momento las utizamos
//Declaración de una variable
var cajaFacturas;

//Asignar un valor a la variable
cajaFacturas = "Info de las facturas 2020"

console.log(cajaFacturas);

//Declarar una variable y asignarle el valor al mismo tiempo
var nombre = "Marcelo"; //variable de caracteres o cadenas de texto

//otra palabra reservada
let edad = 20;//dato de tipo numérico

let resultado = 5 * edad;

console.log(resultado);

resultado = 5 + edad;

console.log(resultado)

console.log('================================================');

let apellido = 'Pérez';

//concateno la variable con un texto
console.log('Mi apellido es: ' + apellido);

//puedo utilizar coma
console.log("Mi apellido es: " , apellido);

//puedo utilizar template string
console.log(`Mi nombre es {nombre} y mi apellido es ${apellido}`);


console.log('================================================');

//Variabale constante: no cambia en toda la ejecución de la app
const DNI = 123456789;

console.log('Mi DNI es ', DNI);

//No puedo asignar otro valor a una constante ya declarada
//DNI = 987654321;


console.log('================================================');

//Errores en los nombre de las variables
/*var 12315 = 'Pepe';
let auro rojo = "El auto es rojo";
let -uno = 1;
var var = 25;
let let = 30;
*/

//Nombre posibles de variables
var numero1 = 1;
let $numero = 100;
const _IVA = 0.21;
let nombre_apellido = 'Nombre y Apellido';
let nombreProvincia = "CABA"
let nombreProducto = "Producto";
let nombreClienteSucursal = "Cliente";
let nombreEmpleado = "Empleado";

console.log($numero);

console.log('================================================');

//Operadore Matemáticos
let numUno = 150;
let numDos = 20;

let suma = numUno + numDos;

console.log('La suma de dos número es: ', suma);

let resta = numUno - numDos;

console.log("La resta es: " + resta);

let multiplicacion = numUno * numDos;

console.log(`La multiplicación es: ${multiplicacion}`);

let division = numUno / numDos;

console.log("La división es: " + division);

let modulo = numUno % numDos;

console.log('El módulo es: ', modulo);

let porcentaje = numUno * numDos / 100;

console.log('El 20% de 150 es: ' + porcentaje);

let producto = 1200;

//calculamos el IVA del kilo de carne
resultado = producto * _IVA;

let totalPago = producto + resultado;

console.log("El iva del producto es: ", resultado);

console.log(`El IVA más el costo del producto es en total: ${totalPago}`);

console.log('================================================');
console.log('================================================');

/* operadores relacionales */
/* > mayor que , < menor que , == igual que, >= mayor o igual que, <= menor o igual que
/* condicionales  */  

edad = 20
if (true) {
//si la condicion es verdadera se ejecuta el codigo dentro de las llaves
console.log("Hola soy el true del condicional if")


}

if(false){
    console.log("nunca voy a imprimir esto")
    //si es flaso no se ejecuta el codigo de la llave
}

if(edad > 18){
    console.log('podes ingresas a la fiesta y comprar bebidas');
}

if(edad < 18){console.log('no podes entrar, a tu casa');}

if(edad == 21 )//false
{
    console.log('podes viajar al exterior sin autorizacion');
}
if (edad >= 21) {
    console.log('podes viajar al exterior sin autorizacion ');
}else{/* si no es true se ejecuta esto */
console.log('sos menor de 21 anios necesitas un permiso de tus padres');
}


console.log('================================================');
console.log('================================================');

let saldo = 3501
let compra = 3500
let saldototal = saldo - compra;


if (saldo > compra){console.log('compraste los productos');
console.log(`tu saldo ahora es ${saldototal}`);}else{
    console.log('compra rechazada');}
console.log('================================================');
console.log('================================================');

/* operadores logicos */
// && y logico - || o logico

let user = 'Joaquin'
let password = '12345'

if (user == 'Joaquin' && password == '12345'){
    console.log('Bienvenido al sistema');
}else{console.log('usuario incorrecto' );}

console.log('================================================');
console.log('================================================');

if(user == 'Joaquin' || password == '12345'){
    console.log('Bienvenido al banco');
}else{
    if(user |= 'Joaquin'){console.log('usuario incorrecto');}
//if anidados (probar cambiando pass y usuario)
    if (password |= '12345'){console.log('pass incorrecta');}

    console.log('raja de aca');
}

console.log('================================================');
console.log('================================================');

//Operadores de incremento y decremento == contadores
//Carrito de compras

let productos = 0
compras = true


if(compras){
    productos ++;
    console.log(`Tu carrito tiene ${productos} comprados`);

}else{
    producto --;
    console.log(`Tu carrito tiene ${producto} comprados`);
}

// COntenedor

let totalSuper = 0; 


let lacteos = 3000;

totalSuper += lacteos

console.log(`El total a pagar es de ${totalSuper} pesos`);


let carnes = 2000;

totalSuper += carnes
console.log(`El total a pagar es de ${totalSuper} pesos`);


let farmacia = 1500;

totalSuper += farmacia
console.log(`El total a pagar es de ${totalSuper} pesos`);

// La ejecucion de nodemon se corta con ctrl+c

