// Criação de uma Lista/Array
var listaFilme = 
["https://br.web.img2.acsta.net/pictures/15/10/14/14/58/220036.jpg", 
"https://br.web.img2.acsta.net/medias/nmedia/18/90/07/53/20391069.jpg", 
"https://br.web.img3.acsta.net/pictures/19/08/06/21/50/5749668.jpg"];

var i = 0;

// Criação do for para uma repitição 
for (i = 0; i < listaFilme.length; i++) {
    //document.write é para inserir uma tag HTML com variavel, no index.HTML
    document.write("<img src=", listaFilme[i], ">" );

}
