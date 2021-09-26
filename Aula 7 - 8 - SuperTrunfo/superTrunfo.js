var cartas = [
    campeao1 = {
        nome:"Veigar, O pequeno  mestre do mal",
        imagem:"https://pbs.twimg.com/media/EV_pnGMXsAU59_q.png",
        atributos: {
            ataque: 2,
            resistencia: 3,
            magia: 1500,
        }        
    },
    campeao2 = {
        nome:"Zed, O mestre das sombras",
        imagem:"https://pm1.narvii.com/6548/104e12a5ffd3f04c2fdc934f39581578d1cf5ddd_hq.jpg",
        atributos: {
            ataque: 8,
            resistencia: 2,
            magia: 6,
        }        
    },
    campeao3 = {
        nome:"Lucian, O purificador",
        imagem:"https://w0.peakpx.com/wallpaper/320/404/HD-wallpaper-lucian-high-noon-velho-oeste-lol-legends-league-of-cirilo.jpg",
        atributos: {
            ataque: 10,
            resistencia: 4,
            magia: 3,
        }        
    },
    campeao4 = {
        nome:"Malphite, O fragmento do monolito",
        imagem:"https://pbs.twimg.com/profile_images/1302423864903958528/9JHITVi6_400x400.jpg",
        atributos: {
            ataque: 2,
            resistencia: 10,
            magia: 5,
        }        
    },
    campeao5 = {
        nome:"Gragas, O badernista",
        imagem:"https://img.ifunny.co/images/2b26b62d23eeb1d197fece551ca41fd4ea09942efcd7061d1483cb94d79adb89_1.jpg",
        atributos: {
            ataque: 2,
            resistencia: 6,
            magia: 8,
        }        
    },
    campeao6 = {
        nome:"Lulu, O capeta em forma de fada",
        imagem:"https://pbs.twimg.com/media/ECdmoUtWkAICBWn.png",
        atributos: {
            ataque: 6,
            resistencia: 6,
            magia: 6,
        }        
    },
]

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6);
    cartaMaquina = cartas[numeroCartaMaquina];
    

    var numeroCartaJogador = parseInt(Math.random() * 6);
    cartaJogador = cartas[numeroCartaJogador];

    while (cartaMaquina  == cartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 6);
    }

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
    //exibirCartaMaquina()
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    var divResultado = document.getElementById("resultado");

    if (valorCartaJogador > valorCartaMaquina){
        htmlResultado = "<p class='resultado-final'>Você Venceu</p>" ;

    } else if (valorCartaJogador < valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Você Perdeu</p>" ; 
    } else {
        htmlResultado = "<p class='resultado-final'>Deu Empate</p>" ;
    }
    divResultado.innerHTML = htmlResultado;

    exibirCartaMaquina();

    document.getElementById("btn-jogar").disabled = true;
}

function exibirCartaJogador() {
    var divCartaJogador = document.inner = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // MANEIRA ANTIGA DE ESCREVER divCartaJogador.style.backgroundImage = "url(" + cartaJogador + ")";
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {       
       opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";  
       
    }
    var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto;
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.inner = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // MANEIRA ANTIGA DE ESCREVER divCartaJogador.style.backgroundImage = "url(" + cartaJogador + ")";
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {       
       opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] +"</p>";  
       
    }
    var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

