let opciones = Number(
    prompt(
        "¿Que deseas realizar?\n1 - Ordenar numeros\n2 - Area de circunfrerencia\n3 - Tipo de triangulo\n4 - Numero amigo\n5 - Valor de compra\n6 - Notas de estudiantes"
    )
);

const menu_Ejercisios = () => {
    switch (parseInt(opciones)) {
        case 1:
            console.log(ordenar_Numeros());
            break;
        case 2:
            console.log(area_Circunfrerencia());
            break;
        case 3:
            console.log(Tipo_triangulo());
            break;
        case 4:
            console.log(numero_Amigo());
            break;
        case 5:
            console.log(Valor_compra());
            break;
        case 6:
            console.log(notas_Estudiantes());
            break;
        default:
            console.log("Elegistes una opcion no valida");
            break;
    }
};
const ordenar_Numeros = () => {
    let numero_Uno = Number(prompt("Ingrese el primer numero"));
    let numero_Dos = Number(prompt("Ingrese el segundo numero"));
    let numero_Tres = Number(prompt("Ingrese el tercer numero"));
    let ordenar_Menor_Mayor = [numero_Uno, numero_Dos, numero_Tres];
    ordenar_Menor_Mayor.sort(function (a, b) {
        return a - b;
    });
    let ordenar_Mayor_Menor = [numero_Uno, numero_Dos, numero_Tres];
    ordenar_Mayor_Menor.sort(function (a, b) {
        return b - a;
    });
    console.log("Orden de menor a mayor: " + ordenar_Menor_Mayor);
    console.log("Orden de mayor a menor: " + ordenar_Mayor_Menor);
};


menu_Ejercisios();
