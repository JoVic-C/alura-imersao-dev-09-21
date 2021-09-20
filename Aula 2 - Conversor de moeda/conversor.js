// Criação de uma função
function ConverterEmDolar() {
    // getElementById é uma função que vai buscar no HTML o id valor
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;

    // parseFloat é um comando do Javascript que transforma uma variavel em float, que seria o double do Java
    var valorNumerico = parseFloat(valor);
    // Conversão do real em dolar   
    var valorEmDolar = valorNumerico * 5.29;
    console.log(valorEmDolar);
    var elementoValorConvertido = document.getElementById("valorConvertido")

    // Criação de uma variavel de texto
    var valorConvertido = "Convertendo "+ valorNumerico + " reais em dolar o resultado é: " +  valorEmDolar.toFixed(2) + " dolares";

    // innerHTML é um comando que colocar a variavel no HTML, inner= interno/dentro
    elementoValorConvertido.innerHTML = valorConvertido;  
}
/*----------------------------------------MELHORIA DE COGIDO-------------------------------------------------------------------------------------*/

function ConverterEmEuro () {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);  
  
  var valorEmEuro = valorNumerico * 6.20 ;
  console.log(valorEmEuro);
  var elementoValorConvertido = document.getElementById("valorConvertido") 
  var valorConvertido = "Convertendo "+ valorNumerico + " reais em dolar o resultado é: " +  valorEmEuro.toFixed(2) + " euros";

  elementoValorConvertido.innerHTML = valorConvertido; 
}

function ConverterEmBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);  
  
  var valorEmBitcoin = valorNumerico * 241363.98 ;
  console.log(valorEmBitcoin);
  var elementoValorConvertido = document.getElementById("valorConvertido") 
  var valorConvertido = "Convertendo "+ valorNumerico + " reais em dolar o resultado é: " +  valorEmBitcoin.toFixed(2) + " bitcoin";

  elementoValorConvertido.innerHTML = valorConvertido; 
}

function ConverterEmLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);  
  
  var valorEmLibra = valorNumerico * 7.24 ;
  console.log(valorEmLibra);
  var elementoValorConvertido = document.getElementById("valorConvertido") 
  var valorConvertido = "Convertendo "+ valorNumerico + " reais em dolar o resultado é: " +  valorEmLibra.toFixed(2) + " libras";

  elementoValorConvertido.innerHTML = valorConvertido; 
}