function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg", "png")) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        var erro = "O endereço de imagem em incorreto";
        console.error(erro);}
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = `<img src=  ${filme}  >`
    var elementListaFilmes = document.getElementById("listaFilmes");
    elementListaFilmes.innerHTML = elementListaFilmes.innerHTML + elementoFilmeFavorito;     
}