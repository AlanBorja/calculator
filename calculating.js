/*
1) Hacer que al clickear el boton se actualice el valor de resultado.

*/

function actualizarResultado(numero){
    let newResultado = document.querySelector('.resultado');
    newResultado.textContent += numero

    return numero
}
function ejecutarCalculo(operador,resultado,siguienteNumero) {
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
    return resultado;
}
function darResultado() {
    let evaluar = document.querySelector('.resultado').textContent;
    const numerosSplit = evaluar.split(/(\+|\-|\*\*|\/|\*|\(|\))/);
    let resultado = parseFloat(numerosSplit[0]);
    let lastDigit;
    const regex = /(\+|\-|\*\*|\/|\*|\(|\))/;
    
    for (let i = 1; i < numerosSplit.length; i +=2) {
        const operador = numerosSplit[i];
        const siguienteNumero = parseFloat(numerosSplit[i + 1]);

        if(numerosSplit[numerosSplit.length] == operador && i >= numerosSplit.length - 2){
            lastDigit = operador;
            console.log(lastDigit);
            break

        };
        if (numerosSplit[numerosSplit.length-1] === '') {
                resultado = ejecutarCalculo(operador,resultado,resultado);
                document.querySelector('.resultado').textContent = resultado;
                break;
        }   

        resultado = ejecutarCalculo(operador,resultado,siguienteNumero);
}
    document.querySelector('.resultado').textContent = resultado.toFixed(2);
    if (numerosSplit.length == 1) {
        document.querySelector('.resultado').textContent = 'error';
    } else if (numerosSplit[numerosSplit.length-1] == 0 && numerosSplit[numerosSplit.length-2] == '/') {
        document.querySelector('.resultado').textContent = 'NO PODES DIVIDIR ENTRE 0';
    }}

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