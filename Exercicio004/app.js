function fnvalidarIdadeCNH() {
    let nomeUsuario = document.getElementById('txtNome').value
    let idadeUsuario = document.getElementById('txtIdade').value

    //  esse == igual que 
    //  esse != diferent que 
    //  esse < maior que 
    //  esse >= maior ou igual que 
    //  esse <= menor ou igual que 

    event.preventDefault()

    

    if (idadeUsuario >= 18) {
        texto="parabéns " + nomeUsuario + ", você pode dirigir"
        document.getElementById('resultado').innerHTML = texto

    } else {
        alert("Desculpe" + nomeUsuario + "você NÃO pode dirigir")
        document.getElementById('resultado').innerHTML = texto 
    }



}

