let amigo = {nome:'jose', 
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
console.log(`${amigo.nome} tinha ${amigo.peso}kg`)
console.log('comeu besteiras e ganhou peso')
amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}kg`)


let num = 8
num **=2
console.log(num)

let s = 'JavaScript'
console.log(s.toUpperCase())