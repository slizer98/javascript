//codigo del cuadrado
console.group("cuadrado")
function areaCuadrado(lado)
{
    return lado * lado;
}
function perimetroCuadrado(lado)
{
    return lado * 4;
}
console.groupEnd();

//codigo del triangulo
console.group("Triangulo");
function areaTriangulo(lado1, lado2, base)
{
    const altura = alturaTriangulo(lado1, lado2, base)
    return (base * altura) / 2;
}
function alturaTriangulo(lado1, lado2, base)
{
    if(lado1 === lado2 && lado1 != base)
    {
        return altura = Math.sqrt((lado1**2) - (base**2) / 4);
    }
    else
    {
        alert("Este no es un triagulo isoceles")
    }
    
}
function perimetroTriangulo(lado1, lado2, base) 
{
    return lado1 + lado2 + base;
}
console.groupEnd();

//codigo del Circulo
console.group("Circulo");
const PI = Math.PI;
function diametroCirculo(radio)
{
    return radio * 2;
}

function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

function areaCirculo(radio)
{
    return PI * (radio * radio);
}
console.groupEnd();

//interactuamos con HTML
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById("inputTrianguloL1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTrianguloL2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("inputTrianguloB");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const input1 = document.getElementById("inputTrianguloL1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTrianguloL2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("inputTrianguloB");
    const value3 = parseInt(input3.value);

    const area = areaTriangulo(value1, value2, value3);
    alert(area);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}