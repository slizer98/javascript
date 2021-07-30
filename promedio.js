//const lista1 = [
//   100,
//   200, 
//   300,
//   500
//];



function calcularMediaAritmetica(lista)
{
    
    //let sumaLista = 0;
    //for(let i = 0; i< lista.length; i++)
    //{
    //    sumaLista += lista[i];
    //}                     
    //const sumaLista = lista.reduce(
    //    function(valorAcumulado = 0, nuevoElemento)
    //    {
    //        return valorAcumulado + nuevoElemento;
    //    }
    //);
    //let sumaLista =0;
    //lista.forEach((number) => {
    //    sumaLista += number
    //})
    const suma = lista.reduce((a=0, b) => a+b);
    const promedio = suma / lista.length;
    return promedio;
}