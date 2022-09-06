var nome= prompt('ola, qual o seu nome?');
alert(`seja bem vindo ao meu contador ${nome}`);

function contar(){
    let ini = document.getElementById('txti')    
    let fim = document.getElementById('txtf')    
    let passo = document.getElementById('txtp')
    passo.focus();
    let res = document.getElementById('res')
    
    //aqui evitamos a falta de dados com teste IF
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.style.background = 'red';
        //alert('[ERRO] Faltam dados para execução');
        res.innerHTML = '[ERRO] Faltam dados para execução, insira todos os dados'
    } else{ 
        res.style.background = 'white';  
        res.innerHTML = 'contando: '
        let i = Number(ini.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
            //TESTE PARA IVALIDAR(P == 0)
        if(p <= 0){
            alert('Passo inválido! considerando passo = 1')
            p = 1
        }

            //CONTAGEM CRESCENTE
        if(i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            // CONTAGEM DECRESCENTE
            for(let c = f; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3c1} PARABÉNS`       
                      
    }
}