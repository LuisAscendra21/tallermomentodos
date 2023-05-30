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
    function calcular_Compra(valorCompra, cantidad) {
        const valorUnitario = valorCompra / cantidad;
        const valor_Total = valorCompra;
        const iva = valor_Total * 0.19;
        const totalCon_Iva = valor_Total + iva;

        if (valorTotal > 1000000) {
            const descuento = valor_Total * 0.1;
            const totalConDescuento = totalCon_Iva - descuento;
            return {
                valorCompra: valor_Total,
                iva: iva,
                total: totalConDescuento
            };
        } else if (valor_Total > 500000) {
            return {
                valorCompra: valor_Total,
                iva: iva,
                total: valor_Total
            };
        } else {
            return {
                valorCompra: valor_Total,
                iva: iva,
                total: totalCon_Iva
            };
        }
    }

    const valor_Compra = Number(prompt('Ingrese valor de compra $'));
    const cantidad = Number(prompt('Ingrese la cantidad del producto: '));
    const resultado = calcular_Compra(valor_Compra, cantidad);
    console.log("Valor de compra: " + resultado.valorCompra);
    console.log("IVA: " + resultado.iva);
    console.log("Total: " + resultado.total);
}
const notas_Estudiantes = ()=>{
    const nota_Uno = parseFloat(prompt("Ingrese la primera nota: "));
    const nota_Dos = parseFloat(prompt("Ingrese la segunda nota: "));
    const nota_Tres = parseFloat(prompt("Ingrese la tercera nota: "));
    const nota_Cuatro = parseFloat(prompt("Ingrese la cuarta nota: "));

    function calcularNota_Final(nota_Uno, nota_Dos, nota_Tres, nota_Cuatro) {
        if (nota_Cuatro === 5) {
            nota_Uno += 1;
          nota_Dos += 1;
          nota_Tres += 1;
        }
      
        // Limitar las notas a un máximo de 5
        nota1 = Math.min(nota_Uno, 5);
        nota2 = Math.min(nota_Dos, 5);
        nota3 = Math.min(nota_Tres, 5);
        nota4 = Math.min(nota_Cuatro, 5);
      
        const notaFinal_Ponderada = (nota_Uno * 0.1) + (nota_Dos * 0.2) + (nota_Tres * 0.3) + (nota_Cuatro * 0.4);
      
        if (notaFinal_Ponderada > 3.5) {
          return "El estudiante ganó";
        } else {
          return "El estudiante perdió";
        }
      }
    
      const resultado = calcularNota_Final(nota_Uno, nota_Dos, nota_Tres, nota_Cuatro);
      console.log(resultado);
      
}

menu_Ejercisios();
