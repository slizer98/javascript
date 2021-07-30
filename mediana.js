function calcularMediaAritmetica(lista)
{
    
    const suma = lista.reduce((a=0, b) => a+b);
    const promedio = suma / lista.length;
    return promedio;
}

// const lista =[
//     100, 
//     200,
//     500,
//     40000000
// ];
function calcularMediana(lista)
{
    const listaOrdenada = lista.sort(function(a, b){return a - b});
    console.log(listaOrdenada);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    
    if (esPar(lista.length))
    {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElementos;
        return mediana;
    
    }
    else 
    {
        mediana = lista[mitadLista];
        return mediana;
    }
}

function esPar(numero)
{
    if (numero % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
