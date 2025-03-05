// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo == ""){
        alert('Registra por favor un nombre valido')
    }else{
        amigos.push(amigo);
        console.log(amigos);
        asignarTextoElemento('ul',`${amigos}`)
        limpiarCaja()
    }
    
}

function limpiarCaja() {
    document.querySelector('#listaAmigos').value = '';
}

agregarAmigo();