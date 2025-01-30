let amigos = [];

//Agregar Amigo a la lista
function agregarAmigo(){
    
    let amigo = document.getElementById('amigo').value;

    if (amigo == "") {
        alert("por favor, inserte un nombre");
    }else{
        amigos.push(amigo);
        document.getElementById('amigo').value="";
        recorreListaAmigos();
    }
}

//Recorrer lista Amigos
function recorreListaAmigos() {
    let elementoHTML = document.querySelector('#listaAmigos');

    let fragmento = document.createDocumentFragment(); 

    elementoHTML.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        fragmento.appendChild(li);
    }

    elementoHTML.replaceChildren(fragmento);
}

//Sortear amigo aleatorio
function sortearAmigo(){
    if (amigos.length != 0) {
        let indiceAmigo =  Math.floor(Math.random()*amigos.length);
        document.getElementById('listaAmigos').innerHTML = "";
        let elementoHTML = document.getElementById("resultado");
        elementoHTML.innerHTML=`El amigo secreto sorteado es: ${amigos[indiceAmigo]}`;
    } else {
        alert("La lista de amigos se encuentra vacía")
    }
}
