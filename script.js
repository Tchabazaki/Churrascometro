// Linguiça - 300g por pessoa + de 6 horas - 500 kg
// Frango - 500g por pessoa + de 6 horas - 700 kg
// Carne - 700g por pessoa + de 6 horas - 1 kg
// Cerveja - 2 litros por pessoa + 6 horas - 3 litros
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 2 litros
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos   = inputAdultos.value;
    let criancas  = inputCriancas.value;
    let duracao   = inputDuracao.value;
    

    let qdtTotalLinguiça = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas);
    let qdtTotalFrango = frangoPP(duracao) * adultos + (frangoPP(duracao) / 2 * criancas);
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML =  `<p> Você vai precisar de: </p><br>`
    resultado.innerHTML += `<p><img src="./Imagens/linguiça.png" rel="linguiça.png" width="20px"> ${qdtTotalLinguiça / 1000} Kg de Linguiça</p><br>`
    resultado.innerHTML += `<p><img src="./Imagens/frango.png" rel="frango.png" width="20px"> ${qdtTotalFrango / 1000} Kg de Frango</p><br>`
    resultado.innerHTML += `<p><img src="./Imagens/carneicon.png" rel="carneicon.png" width="20px"> ${qdtTotalCarne / 1000} Kg de Carne</p><br>`
    resultado.innerHTML += `<p><img src="./Imagens/cervejaicon.png" rel="cervejaicon.png" width="20px"> ${Math.ceil((Math.ceil(qdtTotalCerveja / 350)) / 12)} Caixas de Cerveja</p><br>`
    resultado.innerHTML += `<p><img src="./Imagens/bebidaicon.png" rel="bebidaicon.png" width="20px"> ${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Bebidas</p><br>`
}

function linguicaPP(duracao) {
    if (duracao >= 6) {
        return 500;
    } else {
        return 300;
    }
}
function frangoPP(duracao) {
    if (duracao >= 6) {
        return 700;
    } else {
        return 500;
    }
}
function carnePP(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else {
        return 700;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 3000;
    } else {
        return 2000;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1000;
    }
}
