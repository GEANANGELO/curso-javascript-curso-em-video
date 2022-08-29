var agora = new Date();
var diaSem = agora.getDay();
//diaSem = 6
/*
    0 = domingo
    1 = seguda
    2 = terca
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/
console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break 
    case 2:
        console.log('terca')
        break 
    case 3:
        console.log('quarta')
        break          
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break 
    default:
        console.log('ERRO, opção invalida')
        break       
}