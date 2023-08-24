let populacao = 1000; //a população incial de pessoas infectadas
let transmissao = 4; //quantidade de pessoas para as quais um paciente infectado pode transmitir
let tempoPercorrido = 100; //tempo percorrido

p = transmissao ** tempoPercorrido;

console.log("A quantidade de pessoas infectadas após decorrido de " + tempoPercorrido + " dias será de " + p + " pessoas");