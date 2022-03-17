var valor1 = 0, operador = 0, valor2 = 0;

function clearVisor()
{
    document.getElementById('visor').textContent = "";
}

function addNumber(x)
{
    document.getElementById('visor').textContent += x;
}

function operatorSelect(op)
{
    valor1 = parseFloat(document.getElementById('visor').textContent);
    document.getElementById('visor').textContent = "";
    switch(op)
    {
        case "+":
            operador = 1;
        break;
        case "-":
            operador = 2;
        break;
        case "*":
            operador = 3;
        break;
        case "/":
            operador = 4;
        break;
    }

}
function equalsOp()
{
    valor2 = parseFloat(document.getElementById('visor').textContent);
    document.getElementById('visor').textContent = ""; 
    switch(operador)
    {
        case 1:
            document.getElementById('visor').textContent = valor1 + valor2;
        break;
        case 2:
            document.getElementById('visor').textContent = valor1 - valor2;
        break;
        case 3:
            document.getElementById('visor').textContent = valor1 * valor2;
        break;
        case 4:
            document.getElementById('visor').textContent = valor1 / valor2;
        break;
    }
    operador = 0;
}