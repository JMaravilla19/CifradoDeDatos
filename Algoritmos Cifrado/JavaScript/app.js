//Variables Globales Algoritmo Cesar
let clave1,  izq_der; 
let mensaje1 = document.getElementById("R_Cesar");

// Una vez que cargue el contenido de la pagina web, se ejecuta esto
window.onload = function(){
	//Evento que determina si se hizo click en el boton de CIFRADO de CESAR
	document.getElementById('Cifrado_Cesar').addEventListener("click", cifradoCesar);

	//Evento que determina si se hizo click en el boton de DESCIFRADO de CESAR
	document.getElementById('Desc_Cesar').addEventListener("click", desCesar);

	
	//Evento que determina si se hizo click en el boton de CIFRADO de POLYBIOS
	document.getElementById('Cifrado_Poly').addEventListener("click", cifradoPoly);

	//Evento que determina si se hizo click en el boton de DESCIFRADO de POLYBIOS
	document.getElementById('Desc_Poly').addEventListener("click", DesPoly);

	//Evento que determina si se hizo click en el boton de CIFRADO de VIGENERE
	document.getElementById('Cifrado_Ven').addEventListener("click", cifradoVen);

	//Evento que determina si se hizo click en el boton de DESCIFRADO de VIGENERE
	document.getElementById('Desc_Ven').addEventListener("click", desVen);

}//ON LOAD

// funcion para procesar la clave1 de algoritmo DEL CESAR
function processClave1(){
	
	let clave1_1 = document.getElementById('clave1').value;
	clave1_1 = Number.parseInt(clave1_1);

	//Validar si el ususario ingreso una clave para algoritmo CESAR
	if ( isNaN(clave1_1)){
	alert("Ingresa Un Numero");
	location.reload();
	
	}else{
		return clave1_1;
	}
	
}

// Funcion para determinar si el ususario quiere recorrer el abecedario a la izquierda o derecha, si no se selecciona una opcion, arroja TypeError
function validarIzquierdaDerecha(){
	var radios = document.getElementsByName("izqDer");
    var radio_valido = false;

    var i = 0;
    while (!radio_valido && i < radios.length) {
        if (radios[i].checked){
			radio_valido = document.querySelector('input[name="izqDer"]:checked').value;
		}
        i++;        
    }

    if (!radio_valido){
		alert("Debes elegir una opcion!");
		location.reload();
	}     
	return radio_valido;
	
} 

//Funcion para procesar mensaje de CIFRADO de Cesar
function procesaMensajeCesar(clave, lado){
 	let mensaje1_1 = document.getElementById('mensaje1').value;
	let letraAscii;
	let cifrado;
	 //Texto ingresado por ususario
	//  mensaje1_1 = mensaje1_1.toLowerCase().split(" ");

	 if(mensaje1_1===""){
		alert("Ingresa un mensaje");
		location.reload();

	 } else {

		if (lado === 'derecha'){
			clave = clave - 1;
			mensaje1 = mensaje1_1.split('').map(char=>{

			let letraAscii = char.toLowerCase().charCodeAt(0);
			if(letraAscii >= 97 && letraAscii <= 122){

				if(letraAscii + clave > 122){
					letraAscii= 97 + ( letraAscii - 122 ) + clave;
				}
				else{
					letraAscii = letraAscii + (clave);
				}
				
			}
	
			let cifrado = String.fromCharCode(letraAscii);
			console.log(cifrado);
			// return mayus ? cifrado.toUpperCase() : cifrado;
			return cifrado;
		}).join('');

		}else if(lado === 'izquierda'){
			mensaje1 = mensaje1_1.split('').map(char=>{
				// let mayus = (char === char.toUpperCase()) ? true : false;
				let letraAscii = char.toLowerCase().charCodeAt(0);
				if(letraAscii >= 97 && letraAscii <= 122){
					
					if(letraAscii - clave < 97){
						letraAscii= 122 - (letraAscii - 97) - (clave - 2);

					} else{
						letraAscii = letraAscii - (clave-1);
					}
				}
		
				let cifrado = String.fromCharCode(letraAscii);
				console.log(cifrado);
				return cifrado;
				}).join('');
		}
		
	} 
}//ProcesaMensajeCesar()

// Funcion CIFRADO CESAR
function cifradoCesar(){
	
	clave1= processClave1();
	console.log(clave1);

	izq_der = validarIzquierdaDerecha();
	console.log(izq_der);
	procesaMensajeCesar(clave1,izq_der);

	document.querySelector('.R_Cesar').innerHTML = `Mensaje cifrado: ${mensaje1}`;

}

function procesaDescifradoCesar(clave, lado){
	if (lado === 'izquierda'){
		lado = 'derecha';
	}else{
		lado = 'izquierda';
	}
	
	procesaMensajeCesar(clave, lado);
	
}


// Funcion DESCIFRADO CESAR
function desCesar(){
	clave1= processClave1();
	izq_der = validarIzquierdaDerecha();

	procesaDescifradoCesar(clave1, izq_der);
	document.querySelector('.R_Cesar').innerHTML = `Mensaje cifrado: ${mensaje1}`;

}

// Funcion CIFRADO POLYBIOS
function cifradoPoly(){
	console.log("Clickeaste el boton");
}

// Funcion DESCIFRADO POLYBIOS
function DesPoly(){
	console.log("Clickeaste el boton");
}

// Funcion CIFRADO VIGENERE
function cifradoVen(){
	console.log("Clickeaste el boton");
}

// Funcion DESCIFRADO VIGENERE
function desVen(){
	console.log("Clickeaste el boton");
}