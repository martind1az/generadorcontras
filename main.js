// defino todas las variables  
let cantidad = document.getElementById ('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena')
let copyBoton = document.getElementById('copy')

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789@*#$&'

// declaro las funciones
function generar(){ 
    
    let numeroDigitado = parseInt (cantidad.value);
   
   if (numeroDigitado < 8) {
        alert ("la cantidad de caracteres tiene que ser mayor que 8");

        return;
    } 

    let password = '';

    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
         
        
        password+=caracterAleatorio;
    }

    contraseña.value = password;  
    evaluarSeguridad(contraseña.value);
    
}

function borrar (){
    contrasena.value = "";
    cantidad.value = "";
}


function evaluarSeguridad(contraseña1) {
    console.log(contraseña1); 

    let puntuacion = 0;

    if (contraseña1.length >= 8) { 
        puntuacion++;
    }
    if (/[a-z]/.test(contraseña1)) { 
        puntuacion++;
    }
    if (/[A-Z]/.test(contraseña1)) { 
        puntuacion++;
    }
    if (/\d/.test(contraseña1)) { 
        puntuacion++;
    }
    if (/[@*#$&]/.test(contraseña1)) { 
        puntuacion++;
    }

    console.log(puntuacion); 

    if (puntuacion === 5) {
        alert("Muy segura");
    } else if (puntuacion >= 3) {
        alert("Segura");
    } else {
        alert("Insegura");
    }
}




