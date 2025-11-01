let contatos = []

function fnSalvar(){
    let umContato = {
        nome: document.getElementById('nome').value, 
        fotodecapa: document.getElementById('fotodecapa').value,
        ano: ducument.getElementById('ano').value, 
        avaliacao: document.getElementById('avaliacao').value, 
        trailer: document.getElementById('trailer').value, 
        genero: document.getElementById('genero').value, 
        duracao: document.getElementById('duracao').value,
        descricao: document.getElementById('descricao').value
    }

    contatos.push(umContato)

    console.dir(contatos)
}

function fnListar() {
    let dados = "";
 
    contatos.forEach(function (umContato, i) {
        dados += `
        <div class="col-md-4 mb-4">
            <div class="card" style="width: 100%;">
                <img src="${umContato.foto}" class="card-img-top" alt="Foto de ${umContato.nome}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${umContato.nome}</h5>
                    <p class="card-text">
                        <strong>Telefone:</strong> ${umContato.telefone} <br>
                        <strong>Email:</strong> ${umContato.email}
                    </p>
                    <a href="mailto:${umContato.email}" class="btn btn-danger">Excluir</a>
                </div>
            </div>
        </div>`;
    });
 
    document.getElementById("listaDeContatos").innerHTML = dados;
}

function fnExcluir(){}

document.getElementById('btSalvar').addEventListener('click',function(){
    fnSalvar()
    fnListar()
})
