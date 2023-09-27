const valores = [2,4,6,8,10]
const valoresMapeados = valores.map(valor => {
    return valor %2
})
console.log(valoresMapeados);


const Valores = [1,2,3,4]
const apenasPares = Valores.filter(valor =>{
    return valor %1===0
})
console.log (apenasPares);