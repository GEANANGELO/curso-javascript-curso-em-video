//FUNÇÃO COM RETURN E 1 PARAMETRO
function parimpar(n){
    if(n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimpar(3))
let res = parimpar(4)
console.log(res)

// FUNÇÃO COM APENAS 1 PARAMETO PASSADO
function soma(n1=0,n2=0){
    return n1 + n2
}
console.log (soma(7))

// FUNÇÃO vazia(sem nome) DENTRO DA VARIAVEL
let v = function(x){
    return x*2
}
console.log(v(5))

// FUNÇÃO FATORIAL
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
} 
console.log(fatorial(5))

//RECURSIVIDADE
function fatorial(num){
    if(num == 1){
        return 1
    }else {
        return num * fatorial(num-1)
    }      
}
console.log(fatorial(5))
/*
5!= 5 x 4 x 3 x 2 x 1 ou 5! = 5 x 4!
*/