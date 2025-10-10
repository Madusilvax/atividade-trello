const timesBrasileirao = [
  "Atlético Mineiro",
  "Athletico Paranaense",
  "Bahia",
  "Botafogo",
  "Bragantino",
  "Corinthians",
  "Cruzeiro",
  "Cuiabá",
  "Flamengo",
  "Fluminense",
  "Fortaleza",
  "Grêmio",
  "Internacional",
  "Juventude",
  "Palmeiras",
  "Santos",
  "São Paulo",
  "Vasco da Gama",
  "Vitória",
  "Chapecoense"
];
const cidadetimes = [
  { time: "Atlético Mineiro", cidade: "Belo Horizonte - MG" },
  { time: "Athletico Paranaense", cidade: "Curitiba - PR" },
  { time: "Bahia", cidade: "Salvador - BA" },
  { time: "Botafogo", cidade: "Rio de Janeiro - RJ" },
  { time: "Bragantino", cidade: "Bragança Paulista - SP" },
  { time: "Corinthians", cidade: "São Paulo - SP" },
  { time: "Cruzeiro", cidade: "Belo Horizonte - MG" },
  { time: "Cuiabá", cidade: "Cuiabá - MT" },
  { time: "Flamengo", cidade: "Rio de Janeiro - RJ" },
  { time: "Fluminense", cidade: "Rio de Janeiro - RJ" },
  { time: "Fortaleza", cidade: "Fortaleza - CE" },
  { time: "Grêmio", cidade: "Porto Alegre - RS" },
  { time: "Internacional", cidade: "Porto Alegre - RS" },
  { time: "Juventude", cidade: "Caxias do Sul - RS" },
  { time: "Palmeiras", cidade: "São Paulo - SP" },
  { time: "Santos", cidade: "Santos - SP" },
  { time: "São Paulo", cidade: "São Paulo - SP" },
  { time: "Vasco da Gama", cidade: "Rio de Janeiro - RJ" },
  { time: "Vitória", cidade: "Salvador - BA" },
  { time: "Chapecoense", cidade: "Chapecó - SC" },
];

console.log("Times e cidades do Brasileirão 2025:")
timesBrasileirao.forEach(t => console.log(`${t.time} — ${t.cidade}`))


function fnListaTimes(){
    document.getElementById("lista_times").innerHTML = `
    <div class="col-6 border text-center">
        ${times[0]} - ${cidadesTimes[0]}
    </div>
    `
}
 
fnListaTimes()