const precoTenis = 129.99; //preço original do tenis
const meuDinheiro = 80.00; //valor atual

const porcentagemDesconto = ((precoTenis - meuDinheiro) / precoTenis) * 100; //função

console.log("A porcentagem de desconto necessária é de " + porcentagemDesconto.toFixed() + "%");
