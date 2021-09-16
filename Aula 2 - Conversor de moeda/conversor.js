// Criação de uma função
function Converter() {
    // getElementById é uma função que vai buscar no HTML o id valor
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;

    // parseFloat é um comando do Javascript que transforma uma variavel em float, que seria o double do Java
    var valorEmDolarNumerico = parseFloat(valor);
    
    // Conversão do dolar em real
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");

    // Criação de uma variavel de texto
    var valorConvertido = "Resultado em real é R$ " +  valorEmReal;

    // innerHTML é um comando que colocar a variavel no HTML, inner= interno/dentro
    elementoValorConvertido.innerHTML = valorConvertido;
  
  }