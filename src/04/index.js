// M = C(1 + i)
let c = 1000.00; //capital (valor inicial de uma dívida, empréstimo ou investimento) \
let i = 0.125; //taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
let t = 5; //período de tempo

m = c * Math.pow(1 + i, t); // função

console.log("O valor do montante é " + m.toFixed());