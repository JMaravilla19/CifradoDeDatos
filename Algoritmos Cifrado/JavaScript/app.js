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
	console.log(clave1_1);

	if ( !clave1_1 ){
		
	alert("Ingresa Un Numero");
	return false;
	
	}else{
		return clave1_1;
	}
	
}

// Funcion CIFRADO CESAR
function cifradoCesar(){
	clave1= processClave1();
	console.log("Clickeaste el boton");
	console.log("Update testing")
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