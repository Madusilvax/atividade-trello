function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById("periodo").value 

    // document.getElementById("resposta").innerText = periodoSelecionado

    if(periodoSelecionado == "d"){
        document.getElementById("resposta").innerText = "Dia ☀️"
        document.body.style.backgroundColor = " #b4edff"
        document.body.style.color ="#000000"
        document.getElementById("foto").src="imagens/bom-dia.jpeg"
    }else if(periodoSelecionado == "t"){
        document.getElementById("resposta").innerText = "Tarde 🌤️"
        document.body.style.backgroundColor = " #3a82d4"
        document.body.style.color ="#000000"
        document.getElementById("foto").src="imagens/bom-tarde.webp"
    }else if(periodoSelecionado == "n"){
        document.getElementById("resposta").innerText = "Noite 🌑"
        document.body.style.backgroundColor = " #090de7"
        document.body.style.color ="#ffffff"
         document.getElementById("foto").src="imagens/boa-noite.jpg"
    }else{
        document.getElementById("resposta").innerText = ""
    }
}