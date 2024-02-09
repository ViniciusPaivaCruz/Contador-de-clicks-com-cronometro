/*--------------------------------------------------*/
                    /*Lógica*/
/*--------------------------------------------------*/

/*Divs do documento html sendo puxadas*/
const numeros = document.querySelector('.numero_v')
const mais = document.querySelector('.mais')
const menos = document.querySelector('.menos')

/*Valor inicial do contador de clicks*/
var numeros1 = 0

/*Adicionar +1 ao contador*/
mais.addEventListener('click', function(){
    numeros1 = numeros1 + 1;
    numeros.innerHTML = numeros1;
    if(numeros1 == 1){
        timer()
    }
})

/*Remover -1 do contador*/
menos.addEventListener('click', function(){
    numeros1 = numeros1 - 1;
    numeros.innerHTML = numeros1;   
})

/*Função do Timer*/
function timer(){
    let minutos1 = document.querySelector('.minutos1')
    let segundos1 = document.querySelector('.segundos1')

    var minutos = 0
    var segundos = 0

    function segundo(){
        segundos++;
        console.log(segundos)
        segundos1.innerHTML = segundos
        if(segundos == 60){
            segundos = 0
            minutos++;
            minutos1.innerHTML = minutos
        }
    }
    setInterval(function(){
        segundo()
    },1000)
}

/*Zerar tudo*/
const zerar = document.querySelector('.zerar')
zerar.addEventListener('click', function(){
    location.reload()
})