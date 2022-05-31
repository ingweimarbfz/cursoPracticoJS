let opc = prompt("Ingrese opción a calcular \n 1. Perimetro cuadrado \n 2. Area cuadrado \n 3. Area triangulo \n 4. Perimetro triangulo \n 5. Diametro circulo");

switch (opc) {

  case '1':
    let perimetro = prompt("ingrese el lado del perimetro");

    const hallarPerimetroCuadrado = (lado) => {
      return perimetro = lado * 4;
    }

    console.log(`El perimetro del cuadrado es: ${hallarPerimetroCuadrado(perimetro)}`);

    break;

  case '2':
    let area = prompt("Ingrese lado del cuadrado");

    const hallarAreaCuadrado = (lado) => {
      return area = lado * lado;
    }

    console.log(`El area del cuadrado es: ${hallarAreaCuadrado(area)}`);

    break;

  case '3':

    const hallarAreaTriangulo = (base, altura) => {
      base = prompt("Ingrese base del triangulo");
      altura = prompt("Ingrese altura del triangulo");
      return areaTriangulo = (base * altura) / 2;
    }

    console.log(`El área del triángulo es: ${hallarAreaTriangulo(areaTriangulo)}`);

    break;

  case '4':
    const hallarPerimetroTriangulo = (base, alturaUna, alturaDos) => {
      base = prompt("Ingrese base");
      alturaUna = prompt("Ingrese 1ra altura");
      alturaDos = prompt("Ingrese 2da altura");

      return parseFloat(base) + parseFloat(alturaUna) + parseFloat(alturaDos);

    }

    console.log(`El perimetro del triangulo es: ${hallarPerimetroTriangulo()}`);

    break;

  case '5':
    
    const hallarDiametroCirculo = (radio) => {
      radio = prompt("Ingrese radio");
      return radio * 2;
    }

    console.log(`El diametro del circulo es: ${hallarDiametroCirculo()}`);
    break;

  default:
    console.log("Valor inválido, digite otra opción!")
}








