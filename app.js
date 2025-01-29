let amigos = [];

//Agregar Amigo a la lista
function agregarAmigo(){
    
    let amigo = document.getElementById('amigo').value;

    if (amigo == "") {
        alert("El campo no puede estar vacío, debe ingresar un nombre");
    }else{
        amigos.push(amigo);
        console.log(amigos);
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
