//1
const vetor= []
const vetortamanho = 5 
for(let i= 0; i <vetortamanho; i++) {
    vetor[i]= i+ 1 
}
let maior = vetor[0]
let menor = vetor[0]

for( let i = 0; i <vetortamanho; i++){
    if(vetor[1] > maior) maior= vetor[i]
    if(vetor[1] < menor) menor= vetor[i]
}
console.log(vetor)

console.log(maior)
console.log(menor)

//2 
let soma = 0
for(let i= 0; i <vetortamanho; i++){
    soma += vetor[i]
}
const media = soma / vetortamanho
console.log(media)
 
//3
//um numero aleatorio
function generateRandomNumber(){
    return Math.floor(Math.random()*10) +1;
}

//ex
//20 numeros aleatorios 
const randomNumbers = [20];
for (let i = 0; i < 20; i++) {
    randomNumbers.push(generateRandomNumber(10));
    console.log(randomNumbers);
  }

  //4 // Função para obter o índice do menor valor em um array
function getIndexOfMinValue(array) {
    let minValue = array[0];
    let minIndex = 0;
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
        minIndex = i;
      }
    }
    
    return minIndex;
  }
  
  // Função para obter o índice do maior valor em um array
  function getIndexOfMaxValue(array) {
    let maxValue = array[0];
    let maxIndex = 0;
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
      }
    }
    
    return maxIndex;
  }
  
  // Exemplo de array
  const numbers = [5, 3, 9, 1, 7, 2, 8, 4, 6];
  
  // Obter o índice do menor valor
  const minIndex = getIndexOfMinValue(numbers);
  
  // Obter o índice do maior valor
  const maxIndex = getIndexOfMaxValue(numbers);
  
  // Imprimir os índices
  console.log("Índice do menor valor:", minIndex);
  console.log("Índice do maior valor:", maxIndex);