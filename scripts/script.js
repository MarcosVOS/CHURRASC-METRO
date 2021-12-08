let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("Calculando...")

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qntdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
  let qntdTotalCerveja = cervejaPP(duracao) * adultos;
  let qntdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas)

  resultado.innerHTML = `<p>${qntdTotalCarne/1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qntdTotalCerveja/355)} latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qntdTotalBebida/2000)} Pet's 2L de bebidas</p>`
   
}

function carnePP(duracao){
  if (duracao >= 6){
      return 650
  }else{
    return 400
  }   
}

function cervejaPP(duracao){
  if (duracao >= 6){
      return 2000
  }else{
    return 1200
  }   
}

function cervejaPP(duracao){
  if (duracao >= 6){
      return 2000
  }else{
    return 1200
  }   
}

function bebidaPP(duracao){
  if (duracao >= 6){
      return 1500
  }else{
    return 1000
  }   
}