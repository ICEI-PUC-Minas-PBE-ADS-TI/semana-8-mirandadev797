//DEFINIÇÃO DO DADOS (JSON)

    const catalogo = [
        {
            id: 1,
            titulo: "O Senhor dos Anéis: a sociedade do anel",
            tipo: "filme",
            ano: 2001,
            generos: ["fantasia","aventura"],
            nota: 0,
            assistido: false
        },

        {
            id: 2,
            titulo:"Breaking Bad",
            tipo: "serie",
            ano: 2008,
            generos: ["drama","crime"],
            nota: 9,
            assistido: true
        },

        {
            id: 3,
            titulo: "Inception",
            tipo: "filme",
            ano: 2010,
            generos: ["acao", "ficcao cientifica"],
            nota: 9,
            assistido: true
        },

        {
            id: 4,
            titulo: "Dark",
            tipo: "serie",
            ano: 2017,
            generos: ["misterio"],
            nota: 7,
            assistido: true
        },

        {
            id: 5,
            titulo: "Pulp Fiction",
            tipo: "filme",
            ano: 1994,
            generos: ["crime","thriller"],
            nota: 10,
            assistido: true
        },

        {
            id: 6,
            titulo: "Chernobyl",
            tipo: "serie",
            ano: 2019,
            generos: ["drama","historia"],
            nota: 9,
            assistido: true
        }
    ];

// Acesso e leitura de dados
console.log("-----Lista de Filmes e séries-----");
console.log(catalogo);

console.log("Título do primeiro item: ", catalogo[0].titulo); //título do primeiro item
console.log("Ano do último item: ", catalogo[catalogo.length - 1].ano); //o ano do último item (.length pega o último índice do array)

//mostrar segundo gênero do terceiro item, se houver:
if (catalogo[2]. generos[1])
    console.log("Segundo gênero do terceiro item: ", catalogo[2].generos[1]);
else 
    console.log("Há somente 1 gênero no item 3");

//uso de forEach para listar todos títulos:
// formato - [tipo] título (ano)
console.log("-----Lista dos Títulos-----");
catalogo.forEach(function(item)
{
    console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ") ");
});

//títulos em maiúsculo - Map
const titulosEmCaixaAlta = catalogo.map(function(item){ //map cria novo array
return item.titulo.toUpperCase(); }); //toUpperCase  converte tudo para maiúsculo

console.log("-----Títulos em caixa alta-----");
console.log(titulosEmCaixaAlta);

//seleção de filter
const naoAssistidos = catalogo.filter(function(item)
{
    return item.assistido ===false; // aí irá mostras só os não assistidos
});

console.log("----- Não Assistidos:-----");
console.log("Itens não assistidos: ", naoAssistidos.length);

//busca com find
const notaAlta = catalogo.find(function(item){ //find retorna o primeiro item que satisfaz a condição
    return item.nota>=9;
});
console.log("----- Primeiro item com nota acima de 9:-----");
if (notaAlta)
    console.log("Nota maior que 9: ", notaAlta.titulo, " / Nota: ", notaAlta.nota);
else
    console.log("Nenhum item com nota maior ou igual à 9");

//reduce
const somaNotas = catalogo.reduce(function(acumulador, item){ //reduce acumula valor enquanto percorre o array
    return acumulador + item.nota;
}, 0); // inicio do acumulador = 0
const mediaGeral = somaNotas / catalogo.length; 

const assistidos = catalogo.filter(function(item){ //filtra só os filmes assistidos
    return item.assistido ===true;
})

//soma das notas dos assistidos:
const somaNotasAssistidos = assistidos.reduce(function(acumulador, item){
    return acumulador + item.nota;
}, 0);
//média das notas dos assistidos:
const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log("-----Média das notas-----");
console.log("Média Geral: " , mediaGeral.toFixed(2));
console.log("Média dos assistidos: " , mediaAssistidos.toFixed(2)); // toFixed fixa quantidade de casa decimais

//checagens Some e Every
const algumAntigo = catalogo.some(function(item){
    return item.ano < 2000;
});
const peloMenosUmGenero = catalogo.every(function(item)
{
    return item.generos.length >=1;
});

console.log("----- Checagens: -----");
console.log ("Existe algum item com ano menor que 2000?", algumAntigo);
console.log ("Todos itens tem pelo menos 1 gênero?", peloMenosUmGenero);

//DOM
const totalFilmes = catalogo.filter(function(item){ //quantidde de filmes
    return item.tipo ==="filme" }).length;
const totalSeries = catalogo.filter(function(item){ //quantidade de séries
    return item.tipo === "serie";
}).length;

const ranking = catalogo
.slice()
.sort(function(a,b) {
    return b.nota - a.nota;
}).slice(0, 3);

let rankingHTML = "";
ranking.forEach(function(item,indice){
    rankingHTML += (indice +1) + " " + item.titulo + ":  nota " + item.nota + "<br>";
});

document.getElementById( "output" ).innerHTML = 
"<strong> Resumo do Catálogo</strong><br><br>" +
"Total de itens: " + catalogo.length + "<br>" +
"Filmes: " + totalFilmes + " / Series: " + totalSeries + "<br>" +
"Não Assistidos: " + naoAssistidos.length + "<br>" +
"Média Geral das notas: " + mediaGeral.toFixed(2) + "<br><br>" +
"<strong> Top 3 maiores notas: </strong> <br>" + rankingHTML;







