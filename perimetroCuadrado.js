let opc = prompt("Ingrese opción a calcular");

switch (opc) {
  case '1':
    perimetro = prompt("ingrese el lado del perimetro");

    const hallarPerimetroCuadrado = (lado) => {
      return perimetro = lado * 4;

    }

    console.log(`El perimetro del cuadrado es: ${hallarPerimetroCuadrado(perimetro)}`);

    break;
  case '2':
    area = prompt("Ingrese lado del cuadrado");
    
    const hallarAreaCuadrado = (lado) => {
      return area = lado * lado;
       
    }

     console.log(`El area del cuadrado es: ${hallarAreaCuadrado(area)}`);
    
    break;

  default:
}








