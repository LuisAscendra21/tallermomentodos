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
            console.log(tipo_Triangulo());
            break;
        case 4:
            console.log(numero_Amigo());
            break;
        case 5:
            console.log(valor_Compra());
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
const area_Circunfrerencia = () => {
    function calcular_Circunferencia(radio) {
        if (radio <= 0) {
            return "El radio debe ser un valor positivo.";
        }

        let area = Math.PI * (radio * radio);
        return area.toFixed(2);
    }

    let radio = parseInt(
        prompt("Ingrese su numero para calcular area de circunferencia: ")
    );
    let area = calcular_Circunferencia(radio);
    console.log(
        "El área de la circunferencia con radio " + radio + " es: " + area
    );
};
const tipo_Triangulo = () => {
    function determinar_Triangulo(a, b, c) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    }
    let ladoA = parseInt(prompt("Ingrese la longitud del lado A:"));
    let ladoB = parseInt(prompt("Ingrese la longitud del lado B:"));
    let ladoC = parseInt(prompt("Ingrese la longitud del lado C:"));

    let triangulo = determinar_Triangulo(ladoA, ladoB, ladoC);
    console.log("El triángulo es: " + triangulo);
};
const numero_Amigo = () => {
    function sumar_Divisores(numero) {
        let suma_Uno = 0;
        for (let i = 1; i <= Math.floor(numero / 2); i++) {
            if (numero % i === 0) {
                suma_Uno += i;
            }
        }
        return suma_Uno;
    }

    function amigo_numero(numero_Uno, numero_Dos) {
        const suma_Uno = sumar_Divisores(numero_Uno);
        const suma_Dos = sumar_Divisores(numero_Dos);

        if (suma_Uno === numero_Dos && suma_Dos === numero_Uno) {
            return true;
        }
        return false;
    }

    const numero_Uno = parseInt(prompt("Ingrese el primer número:"));
    const numero_Dos = parseInt(prompt("Ingrese el segundo número:"));

    if (amigo_numero(numero_Uno, numero_Dos)) {
        console.log("El numero", + numero_Uno + " entre el numero", + numero_Dos + " son amigos");
    } else {
        console.log("El numero", + numero_Uno + " entre el numero", + numero_Dos + " no son amigos");;
    }

}
const valor_Compra = () => {
    function calcularCompra(valorCompra, cantidad) {
        const valorUnitario = valorCompra / cantidad;
        const valorTotal = valorCompra;
        const iva = valorTotal * 0.19;
        const totalConIva = valorTotal + iva;

        if (valorTotal > 1000000) {
            const descuento = valorTotal * 0.1;
            const totalConDescuento = totalConIva - descuento;
            return {
                valorCompra: valorTotal,
                iva: iva,
                total: totalConDescuento
            };
        } else if (valorTotal > 500000) {
            return {
                valorCompra: valorTotal,
                iva: iva,
                total: valorTotal
            };
        } else {
            return {
                valorCompra: valorTotal,
                iva: iva,
                total: totalConIva
            };
        }
    }

    const valorCompra = Number(prompt('Ingrese valor de compra $'));
    const cantidad = Number(prompt('Ingrese la cantidad del producto: '));
    const resultado = calcularCompra(valorCompra, cantidad);
    console.log("Valor de compra: " + resultado.valorCompra);
    console.log("IVA: " + resultado.iva);
    console.log("Total: " + resultado.total);
}

menu_Ejercisios();
