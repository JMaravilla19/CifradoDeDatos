//Variables Globales Algoritmo Cesar
let clave1,  izq_der; 
let mensaje1;

// variables globales algoritmo Polybios
/**
 * En este caso, la letra k tiene asignado el valor 26, y aunque las letra I - J deberian
 * tener el mismo valor (24) decidimos asignarle uno distinto para que no de problemas
 * al momento de cifrar - descifrar
 *  */ 
 
const abecedario = {
	a:'11', b:'12', c: '13', d:'14', e:'15', f:'21', g:'22',
	h:'23', i:'24', j:'25', k:'26', l:'31', m:'32', n:'33', o:'34', p:'35',
	q:'41', r:'42', s:'43', t:'44', u:'45', v:'51', x:'52', w:'53', y:'54', z:'55'

};
let mensaje2;

// Variables Globales algoritmo VIGENERE
let mensaje3;

 
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
	
	clave1 = processClave1();
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
	document.querySelector('.R_Cesar').innerHTML = `Mensaje descifrado: ${mensaje1}`;

}

// Funcion CIFRADO POLYBIOS
function cifradoPoly(){
	let cifrado='';
	let mensaje2_1 = document.getElementById("mensaje2").value;
	let temporal;

	if(mensaje2_1===""){
		alert("Ingresa un mensaje");
		location.reload();

	 }else{
		// Iterar sobre el objeto que incluye todo el abecedario y sus valores.
			mensaje2_1 = mensaje2_1.split('');
			console.log(mensaje2_1);

				for(let i=0; i < mensaje2_1.length; i++ ){
					// console.log(mensaje2_1[i]);

					for (const letras in abecedario){
					
						if (letras === mensaje2_1[i]){

							cifrado += abecedario[letras];
							console.log(letras);
							
						}
					}

				}
				// console.log(mensaje2_1);
				// console.log(cifrado);
				mensaje2 = cifrado;
	 	}
	
	document.querySelector(".R_Polybios").innerHTML = `Mensaje cifrado: ${mensaje2}`;

}



// Funcion DESCIFRADO POLYBIOS
function DesPoly(){
	let mensaje2_2 = document.getElementById("mensaje2").value;
	let arreglo=[];
	let temporal;
	let descifrado = '';
	//Se ingresa como tipo string el mensaje cifrado
	console.log (typeof mensaje2_2);
	
	//Retorna arreglos con pares.
	// mensaje2_2 = SepEnPares(mensaje2_2.split(""),2);
	

	// genera un arreglo con los pares de numeros.
	for (let i=0; i < mensaje2_2.length; i++){
		
		temporal = mensaje2_2.charAt(i) + mensaje2_2.charAt(i+1);
		arreglo.push(temporal);
		temporal = '';
		i++;
		console.log(arreglo);

	}
	
	// Itera sobre el arreglo anterior y las letras del objeto abecedario
	// Para buscar que valores hacen match
	for ( let i = 0; i < arreglo.length; i++ ){

		for (letras in abecedario){
			if ( abecedario[ letras ] === arreglo[i]){
				descifrado += letras;
			}
		}

	}
	
	mensaje2 = descifrado;
	console.log(mensaje2_2);

	
	
	
	document.querySelector(".R_Polybios").innerHTML = `Mensaje descifrado: ${mensaje2}`;

}

// Funcion CIFRADO VIGENERE
function cifradoVen(){
	
	console.log("Clickeaste el boton");
}

// Funcion DESCIFRADO VIGENERE
function desVen(){
	console.log("Clickeaste el boton");
}