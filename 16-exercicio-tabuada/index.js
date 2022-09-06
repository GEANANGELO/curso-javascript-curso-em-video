var nome = prompt('qual seu nome: ')
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert(`${nome} digite um numero`)
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerText = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab ${c}`          
            tab.appendChild(item) //add filho item
            c++ 
        }
    }
}