document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("FormNumeros");
    const divResultados = document.getElementById("resultados");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtener los valores de los inputs y convertirlos a números enteros
        const num1 = parseInt(document.getElementById("N1").value);
        const num2 = parseInt(document.getElementById("N2").value);

        // Validar que sean números válidos
        if (isNaN(num1) || isNaN(num2)) {
            divResultados.innerHTML = "<p style='color: red;'>Por favor, ingresa números válidos.</p>";
            return;
        }

        // 1. Calcular mayor y menor
        let mayor, menor;
        if (num1 > num2) {
            mayor = num1;
            menor = num2;
        } else if (num2 > num1) {
            mayor = num2;
            menor = num1;
        } else {
            mayor = menor = "Ambos números son iguales";
        }

        // 2. Función para verificar si un número es primo
        function esPrimo(n) {
            if (n <= 1) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        }

        const primo1 = esPrimo(num1) ? "Es primo" : "No es primo";
        const primo2 = esPrimo(num2) ? "Es primo" : "No es primo";

        // 3. Mostrar los resultados en el HTML
        divResultados.innerHTML = `
            <p><strong>Número mayor:</strong> ${mayor}</p>
            <p><strong>Número menor:</strong> ${menor}</p>
            <hr style="border: 0; border-top: 1px solid #b3e5fc; margin: 10px 0;">
            <p><strong>El número ${num1}:</strong> ${primo1}</p>
            <p><strong>El número ${num2}:</strong> ${primo2}</p>
        `;
    });
});