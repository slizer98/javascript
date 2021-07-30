

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento =(precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calculaPriceDescount()
{
    inputprice = document.getElementById("inputPrice");
    valuePrice = inputprice.value;
    inputDescount = document.getElementById("inputDiscount");
    valueDescount = parseInt(inputDescount.value);
    var descuento;
    switch(valueDescount)
    {
        case 0:
            descuento = 0;
            break;
        case 5:
            descuento = 5;
            break;
        case 15:
            descuento = 15;
            break;
        case 25:
            descuento = 25;
            break;

    }
    console.log(descuento);

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, descuento);

    const resultp = document.getElementById("resultP");

    resultp.innerText = "El preio con descuento es $:" + precioConDescuento;

}




//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//});