const lista =[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    1,
    2,
    2,
    2,
    3,
    5,
    6,
    7
];

const listaCount = {}; //objeto vacio

lista.map(
    function(elemento){
        if(listaCount[elemento])
        {

            listaCount[elemento] += 1;
        }
        else{
            
            listaCount[elemento] = 1;
        }
    }
)
                //convierte un objeto a un arreglo
const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = listaArray[listaArray.length - 1];