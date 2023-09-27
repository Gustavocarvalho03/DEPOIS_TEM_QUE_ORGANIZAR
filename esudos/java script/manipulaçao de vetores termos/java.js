//map()
const valores = [2,4,6,8,10]
const valoresMapeados = valores.map(valor => {
    return valor *2
})
console.log(valoresMapeados);

//filter()
const Valores = [1,2,3,4]
const apenasPares = Valores.filter(valor =>{
    return valor %2===0
})
console.log (apenasPares);

//reduce()
const V = [1,2,3]
const somaElementos = V.reduce ( (novoValor,valoresAntigo) =>{
    return valoresAntigo + novoValor
})
console.log(somaElementos)

//find()

const val = [1,2,3,4]

const buscaPrimeiroNumeroPar = val.find(valor => {
    return valor %2 ===0
})

    console.log (buscaPrimeiroNumeroPar);

//concat()
const valores1 = [1,2]
const valores2 = [3,4]  

const concatenaArrays = valores1.concat(valores2)

console.log(concatenaArrays);

//join()

const Val = [1,2,3]

const junçaoElementos = Val.join()
const elementosSeparadosPorhifen = val.join("-")

console.log(junçaoElementos);
console.log(elementosSeparadosPorhifen)

//sort()

const vaLores = [2,3,1]
const stringValores = ["c", "b","a"]

const ordenaçaoNumeros = vaLores.sort()
const ordenaçaoCaracteres = stringValores.sort()

console.log(ordenaçaoNumeros);
console.log(ordenaçaoCaracteres);

//includes ()
const vAlores = [1,2,3]
const verificaElementos2 = vAlores.includes(2)
const verificaElementos5 = vAlores.includes(5)

console.log(verificaElementos2);
console.log(verificaElementos5);

//indexOf()
const valOres = [1,2,3]
const indiceElementoExistente = valOres.indexOf(1)
const indiceElementoinexistente = valOres.indexOf(10)

console.log(indiceElementoExistente);

console.log(valOres[0]);

console.log(indiceElementoinexistente);


//Unshift()
const valoRes = [1,2] 
valoRes.unshift (3,4)
console.log(valoRes)

//push()

const valorEs = [1,2]
valorEs.push(3,4)
console.log (valorEs)

//shift()

const valoreS = [1,2]
valoreS.shift(3,4)

console.log(valoreS)








