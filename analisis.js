// helpers
function esPar(numero){
    return(numero % 2 === 0);
}

function calcularMediaAritmetica(lista)
{
    
    const suma = lista.reduce((a=0, b) => a+b);
    const promedio = suma / lista.length;
    return promedio;
}



// calculadora de medianas
function medianaSalariosMex(lista)
{
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length))
    {
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica(personaMitad1, personaMitad2);
        return  mediana;
    }
    else
    {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General
const salariosMex = mexico.map(
    function(persona){
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralMex = medianaSalariosMex(salariosMexSorted);

// Mediana top 10%
const spliceStart = (salariosMexSorted.length * 90) / 100 ;
const spliceCount = salariosMexSorted.length - spliceStart;
                                    // splice: saca un porcentaje del array
const salariosMexTop10 = salariosMexSorted.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalariosMex(salariosMexTop10);

console.log(
    medianaGeneralMex,
    medianaTop10Mex,
);
