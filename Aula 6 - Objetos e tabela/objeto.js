var rafa = {nome: "Rafa", vitorias:"", empates:"",derrotas:"", pontos:""}
var paulo = {nome: "Paulo", vitorias:"", empates:"",derrotas:"", pontos:""}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

var jogadores = [rafa, paulo];

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

function exibeJogadoresTela(jogadores) {
    var elemento = "";

    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>"+ jogadores[i].nome +"</td>"
        elemento += "<td>"+ jogadores[i].vitorias +"</td>"
        elemento += "<td>"+ jogadores[i].empates +"</td>"
        elemento += "<td>"+ jogadores[i].derrotas +"</td>"
        elemento += "<td>"+ jogadores[i].pontos +"</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"   
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
     
}

exibeJogadoresTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresTela(jogadores);
}