// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    let nombre = amigo.trim();
    //console.log(amigo);
    //console.log(nombre);
    if(nombre === ""){
        alert('Por favor,inserte un nombre')
        return;
    }else{
        amigos.push(nombre);
        //console.log(amigos);        
        limpiarCaja()
        mostrarAmigos();
    }
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Agregue al menos un amigo para sortear')
        return;
    }
    let sorteoAmigos = Math.floor(Math.random() * amigos.length);
    document.getElementById('resultado').textContent = `El amigo secreto es : ${amigos[sorteoAmigos]}`;
}

agregarAmigo();