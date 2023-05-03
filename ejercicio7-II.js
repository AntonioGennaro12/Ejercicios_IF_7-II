/*
Algoritmo que detecta un palabra  o una 
secuencia de caracteres (caden) dentro
de una frase o cadena de texto previamente ingresada.
*/
const   miTitulo    = document.querySelector ("#mi-titulo");
const   imp2Texto   = document.querySelector ("#lb2-texto"); //para label cadena
const   imp2Pala    = document.querySelector ("#lb2-pala");  //para label palabra
const   impTexto    = document.querySelector ("#lbl-texto"); //para input cadena
const   impPala     = document.querySelector ("#lbl-pala");  //para input Palabra
const   miParrafo1  = document.querySelector ("#mi-salida1");
const   miParrafo2  = document.querySelector ("#mi-salida2");
const   miParrafo3  = document.querySelector ("#mi-salida3");

var     cont = 0;
miTitulo.textContent = "*** BUSCADOR DE PALABRAS ***"

function buscaCadena() {
    cont += 1;
    let cadenaIngresada = impTexto.value;
    let palabraBuscada  = impPala.value;

    if (cadenaIngresada.includes(palabraBuscada)) {
        miParrafo1.textContent = "La palabra o cadena '" + palabraBuscada + 
            "' Sí se encuentra en la cadena ingresada.";
    } else {
        miParrafo1.textContent = "La palabra o cadena '" + palabraBuscada + 
            "' NO se encuentra en la cadena ingresada.";
    }
    miParrafo2.textContent = "Intente nuevamente...";
    if (!(cont % 3)) {miParrafo3.textContent = "Tip #1: Para buscar puede copiar y pegar texto desde un archivo.";}
    else if (!(cont % 7)){miParrafo3.textContent = "Tip #2: Para buscar una palabra inserte un espacio antes y/o despues de la misma.";}
    else { miParrafo3.textContent = "";} 
}
