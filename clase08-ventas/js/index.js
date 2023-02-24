alert("Bienvanido a la app")
// es un mensaje cuando entro a la pagina

//pormt Posibilidad de introducir dato a la aplicacion
prompt("introduzca su usuario")

//confirm: consulta para confirmar o canclear una info

confirm("desea continuar?")

//1-creamos una variables
//2-le asignamos una variable al promt y gurda los datos

let user = prompt('user:     ');
let password = prompt('passord:    ');
let confirmar = confirm('Registrar datos');

if(confirmar){
    console.log('Mi user es' + user );
    console.log('Mi password es' + password );
    console.log(confirmar);
}else{
    console.log('El cliente no acepto las cookies');
    alert('Usted no capeto las cookies')
}
console.log('==========================================');
console.log('==========================================');


// Pasamos el dato de string a numero

