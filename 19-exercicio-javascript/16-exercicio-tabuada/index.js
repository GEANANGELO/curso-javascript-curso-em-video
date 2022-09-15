let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []





function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }    
}

function inLista(n , l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
    return false
    }
}

function adicionar(){
    //se for um numero o value de num, e não estivar na lista do array:valores
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //abaixo estamos add o numero digitad do input ao ARRAY VALORES
        valores.push(Number(num.value))         
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item) //anexar filho item a lista de options
        res.innerHTML = '' //limpar o res qd for adicionado novo numero
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''  //logo apos add o numero ele limpa o input
    num.focus()  // vai fazer o input ficar acessivel sem precisar clica-lo novamente 
}

function finalizar(){
    if (valores.length == 0) {
        alert('adicione valores antes de finalizar!')
    } else{
        //tot recebe a qtd de elementos do array valores
        let tot = valores.length 

        let maior = valores[0]
        let menor = valores[0]
        let soma  =  0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}</p>` 
        res.innerHTML += `<p> o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p> a media dos valores digitados é ${media}</p>`
    }   
}