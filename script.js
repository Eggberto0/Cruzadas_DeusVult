var vetorDica = ["1 - Tem quatro núcleos, permitindo que o processador execute várias tarefas simultaneamente.",
    "2 - São pequenas áreas de armazenamento dentro da CPU usadas para guardar dados temporários, resultados e endereços de memória.",
    "3 - Tem dois núcleos de processamento, permitindo que o processador execute várias tarefas simultaneamente",
    "4 - É a unidade central de processamento, responsável por executar as instruções e coordenar as operações de um computador",
    "5 - São processadores fabricados pela Intel Corporation, podendo ser quad-core ou hexa-core, com suporte para hyper-threading.",
    "6 - Memória de apenas leitura, contendo dados ou instruções permanentes.",
    "7 - Memória regravável eletronicamente.",
    "8 - São unidades de execução dentro de um processo, permitindo a execução simultânea de tarefas para melhor desempenho e capacidade de resposta.",
    "9 - É um sinal de controle usado para selecionar um dispositivo específico em um barramento compartilhado.",
    "10 - É uma memória rápida usada para armazenar dados frequentemente acessados pela CPU, reduzindo a latência de acesso à memória principal e melhorando o desempenho do sistema.",
    "11 - São componentes do barramento do sistema. O Address Bus transporta informações sobre o endereço de memória desejado, e o Data Bus transporta os dados entre a CPU e a memória ou dispositivos de E/S.",
    "12 - é um componente do barramento do sistema responsável por transmitir os dados entre a CPU, a memória e osdispositivos de entrada/saída. Ele permite a comunicação bidirecional e é essencial para transferir informaçõesdentro do sistema.",
    "13 - É a unidade lógica e aritmética dentro da CPU, responsável por realizar operações matemáticas e lógicas.",
    "14 - Memória de armazenamento permanente, como discos rígidos e SSDs.",
    "15 - São processadores fabricados pela Intel Corporation, geralmente sendo quad-core.",
    "16 - É uma técnica que permite que dispositivos acessem diretamente a memória principal sem passar pela CPU, melhorando a eficiência do sistema.",
]
var palavras = ["quadcore", "registradores", "dualcore", "cpu", "i7", "rom", "eprom", "threads", "cs", "cache", "addressbus", "databus", "ula", "memoriademassa", "i5", "dma"]

var dicaVetor = 0;
var textoConcatenado = "";
var inputs;

function dicas(num) {
    for (var i = 1; i <= 87; i++) {
        if (document.getElementById(`letra${i}`).disabled == false) {
            document.getElementById(`letra${i}`).disabled = true;

        }
        
    }


    if (dicaVetor == 0 && num == -1) {
        dicaVetor = vetorDica.length - 1;
    } else if (dicaVetor == vetorDica.length - 1 && num == 1) {
        dicaVetor = 0; s
    } else {
        dicaVetor = dicaVetor + num;
    }
    span_dica.innerHTML = `${vetorDica[dicaVetor]}`

    inputs = document.getElementsByClassName(`${palavras[dicaVetor]}`);

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "#000000 solid 1px"; 
        inputs[i].disabled = false;
        console.log(inputs[i].value);
    }

}

function verificar(){
    textoConcatenado = ""
    for (var i = 0; i < inputs.length; i++) {
        textoConcatenado += inputs[i].value

    }
    if(textoConcatenado == palavras[dicaVetor]){
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.border = "#00ff00 solid 1px"; 
            
        }
        palavras.splice(dicaVetor,1);
        vetorDica.splice(dicaVetor,1);
        dicas(0)
    }else{
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.border = "#ff0000 solid 1px"; 

        }
    }
}






