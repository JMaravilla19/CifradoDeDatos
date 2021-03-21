//Objeto con Abecedarios, al derecho y al reves
let abecedario = {
	abc: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],

	zyx: ['z', 'y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a']
};

//Variables Globales Algoritmo Cesar
let clave1,  izq_der, mensaje1;

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
	let izq_der_1 = document.querySelector('input[name="izqDer"]:checked').value;
	
	return izq_der_1;
} 

//Funcion para procesar mensaje de CIFRADO de Cesar
function procesaMensajeCesar(clave, lado){
 	let mensaje1_1 = 	document.getElementById('mensaje1').value
	
	 if(mensaje1_1==="" || mensaje1_1.length ===0){
		alert("Ingresa un mensaje");
		location.reload();
	 }
else {

	if (lado === 'izquierda'){
		console.log(mensaje1_1);

	}else if(lado === 'derecha'){
		console.log(mensaje1_1);
	}

} 

}

// Funcion CIFRADO CESAR
function cifradoCesar(){
	
	clave1= processClave1();
	console.log(clave1);

	izq_der = validarIzquierdaDerecha();
	console.log(izq_der);
	
	procesaMensajeCesar(clave1,izq_der);
}
// Funcion DESCIFRADO CESAR
function desCesar(){
	console.log("Clickeaste el boton");
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