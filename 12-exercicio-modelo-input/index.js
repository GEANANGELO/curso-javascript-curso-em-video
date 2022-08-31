//var nome= prompt('ola, qual o seu nome?');
//alert(`seja bem vindo ao meu site ${nome}`);

function verificar(){
    var data =  new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano'); //obter Elemento por ID,com parametro imput de ano nasc
    var res = document.querySelector('div#res');  //seletor de consulta


    //abaixao vai verificar se o tamanho do valor do imput é = 0 ou ano do input digitado é maior que o ano atual
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex');  //obter os elementos de Name="radsex"
        var idade= ano - Number(fano.value);  //(ano do sistema) - conversao para number (valor digitado do input)
        var genero= '';  //a variavel começa vazia
        var img = document.createElement('img')  //esta criando a tag img 
        img.setAttribute('id', 'foto')  //atribuindo id='foto' para tag img
        //se fsex de indice [0] == masculino estiver checado, FAÇA
        if(fsex[0].checked) {
            genero = 'homem'   //genero que é vazio recebe 'homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'menino.jpg')  // definir atributo
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }
            //se fsex de indice [1] == feminino estiver checado, FAÇA
        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign ='center' //vai a div de id='res' e centralizar
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //internoHTML
        res.appendChild(img) //anexar,acrescentar filho(imagen)
    }

}