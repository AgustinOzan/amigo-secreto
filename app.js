let amigos = [];

//Función para agregar Amigo a la lista
function agregarAmigo(){
    
    let amigo = document.getElementById('amigo').value;

    if (amigo == "") {
        alert("El campo no puede estar vacío, debe ingresar un nombre");
    }else{
        amigos.push(amigo);
        console.log(amigos);
        document.getElementById('amigo').value="";
    }
}

