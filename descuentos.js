

const hallarPrecioConDescuento = () => {

    precioOriginal = document.getElementById("precioOriginal").value;
    descuento = document.getElementById("descuento").value;

    porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return document.getElementById("precioConDescuento").innerText = `Precio con descuento: ${precioConDescuento}`;
    //return console.log(precioConDescuento);
}

//console.log(hallarPrecioConDescuento());
calcular = document.getElementById("calcular");
calcular.addEventListener("click", hallarPrecioConDescuento);