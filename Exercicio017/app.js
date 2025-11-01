let contatos = []

function fnSalvar(){
    let umContato = {
        nome: document.getElementById('nome'). value, 
        fotodecapa: document.getElementById('fotodecapa'). value,
        ano: document.getElementById('ano'). value, 
        avaliacao: document.getElementById('avaliacao'). value, 
        trailer: document.getElementById('trailer'). value, 
        genero: document.getElementById('genero'). value, 
        duracao: document.getElementById('duracao'). value,
        descricao: document.getElementById('descricao'). value
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
                <img src="${umContato.fotodecapa}" class="card-img-top" alt="Foto de ${umContato.fotodecapa}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${umContato.nome}</h5>
                    <p class="card-text">
                        <strong>Ano:</strong> ${umContato.ano} <br>
                        <strong>Avaliação:</strong> ${umContato.avaliacao}
                    </p>
                    <a href="mailto:${umContato.trailer}" class="btn btn-danger">Assitir Trailer</a>
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
