/*
1) Hacer que al clickear el boton se actualice el valor de resultado.

*/

function actualizarResultado(numero){
    let newResultado = document.querySelector('.resultado');
    newResultado.textContent += numero

    return numero
}

function darResultado() {
    let evaluar = document.querySelector('.resultado').textContent;
    const numerosSplit = evaluar.split(/(\+|\-|\*\*|\/|\*|\(|\))/);
    let resultado = parseFloat(numerosSplit[0]);
    let lastDigit;
    for (let i = 1; i < numerosSplit.length; i +=2) {
        const operador = numerosSplit[i];
        const siguienteNumero = parseFloat(numerosSplit[i + 1]);

        if(numerosSplit[numerosSplit.length] == operador && i >= numerosSplit.length - 2){
            lastDigit = operador;
            console.log(lastDigit);
            break

        };
        //Intentando hacer que si el ultimo digito es un operador, lo guarde como parte de resultado y lo use en la siguiente operacion, tiene que aparecer asi por ejemplo 2+2+ = 4+
        console.log(numerosSplit)
        console.log(numerosSplit[numerosSplit.length-2])
        console.log(numerosSplit[numerosSplit.length] == operador)
        switch (operador) {
            case '+':
                resultado += siguienteNumero;
                break;
            case '-':
                resultado -= siguienteNumero;
                break;
            case '*':
                resultado *= siguienteNumero;
                break;
            case '/':
                resultado /= siguienteNumero;
                break;
            case '**':
                resultado = resultado ** siguienteNumero;
                break;
            default:
                console.error('Operador no soportado', operador)
        }
    }
    document.querySelector('.resultado').textContent = resultado;
}

function borrarUno(){
    let aBorrar = document.querySelector('.resultado').textContent;
    aBorrar = aBorrar.split('');
    aBorrar.pop();
    aBorrar = aBorrar.join('');
    document.querySelector('.resultado').textContent = aBorrar;
}

function borrarTodo() {
    document.querySelector('.resultado').textContent = '';
}

document.querySelectorAll('button').forEach((numero)=> {
    numero.addEventListener('click', () => {
        if (numero.textContent == '='){
            darResultado();
        } else if(numero.textContent == 'del'){
            borrarUno();
        } else if (numero.textContent == 'delAll') {
            borrarTodo();
        }
        else {
            actualizarResultado(numero.textContent);}
    });
});