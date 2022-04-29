// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado +"cm cuadrados");
console.groupEnd();

// Código del triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
);
console.log("La altura del triángulo es: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triángulo es: " + areaTriangulo +"cm cuadrados");
console.groupEnd();

// Código círculo
console.group("Círculo");
// const PI = Math.PI;
const PI = 3.1416;
const radio = 4;
const diametro = 2*radio;

console.log("El radio del círculo es: " + radio + "cm");

const perimetroCirculo = (diametro * PI);
console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = PI * (radio^2);
console.log("El área del circulo es: " + areaCirculo + "cm cuadrados")
console.groupEnd();