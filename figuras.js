function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

function perimetroTriangulo(ladoa, ladob, ladoc) {
  return ladoa + ladob + ladoc;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  return 2 * PI * radio;
}

function areaCirculo(radio) {
  return PI * radio * radio;
}

function calcularPerCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
