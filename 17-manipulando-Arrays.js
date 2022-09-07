//let num = []
//console.log(num)

let num = [2 , 1, 4, 5, 3]
num.push(6)
//aparece a qtd de elementos
console.log(num.length)
// aparece os colchetes, numeros e virgulas 
console.log(num)
//usando template, aparece apenas os numeros e virgulas
console.log(`${num}`) 
console.log(`o vetor tem ${num.length} elementos`)
console.log(`o vetor em ordem crescente é ${num.sort()}`)
console.log(`o valor do indice 4, do vetor é ${num[4]}`)
console.log(`o penultimo valor do vetor é ${num.length -1}`)
console.log(`o ultimo valor criado do vetor é ${num.length +1}`)

for(let pos = 0; pos < num.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

    //PROCURANDO a posição de um elemento que existe no ARRAY
let posi = num.indexOf(5)
if (posi == -1) {
    console.log('valor não encontadro no ARRAY')
} else{
    console.log(`o valor 5 esta na posição ${posi}`)
}

    //PROCURANDO a posição de um elemento que NÃO existe no ARRAY
posi = num.indexOf(7)
if (posi == -1) {
    console.log('valor não encontadro no ARRAY')
} else{
    console.log(`o valor 7 esta na posição ${posi}`)
}