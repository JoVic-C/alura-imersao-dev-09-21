var numeroSecreto = parseInt(Math.random() * 11);


function Chutar() {
    var resultado = document.getElementById("resultado");
    
    
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute); 

    if  (chute == numeroSecreto){
        resultado.innerHTML = `Você acertou o número secreto (${numeroSecreto}), Parabéns`;
    } 
        else if (chute > 10 || chute < 0) {
            resultado.innerHTML = `Você deve chutar um número entre 0 a 10`;

        }
           
                
    if (chute < numeroSecreto )  {
        resultado.innerHTML = `Você errou, porém o número é um pouco maior`;
    }
        else if (chute > numeroSecreto ) {
            resultado.innerHTML = `Você errou, porém o número é um pouco menor`;
        }


                  
    

}
