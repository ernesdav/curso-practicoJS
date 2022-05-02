// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base;
    return perimetro;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();

// Código círculo
console.group("Círculo");
const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    //const diametro = diametroCirculo(radio);
    const diametro = radio*2;
    return diametro * PI;
}

function areaCirculo(radio){
    return (PI * (radio^2));
}

console.groupEnd();


// Interacción con HTML
/*CUADRADO*/
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
/*TRIANGULO*/
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputTriangulo1");
    const lado2 = document.getElementById("inputTriangulo2");
    const base = document.getElementById("inputTriangulo3");
    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById("inputTriangulo3");
    const altura = document.getElementById("inputAltura");
    const value1 = base.value;
    const value2 = altura.value;

    const area = areaTriangulo(value1, value2);
    alert(area);
}
/*CIRCULO*/
function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculo");
    const value = radio.value;

    const area = areaCirculo(radio);
    alert(area);
}