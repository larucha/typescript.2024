interface Puntos {
    punto: number; // Representa los puntos acumulados por cada equipo
}

// Inicialización de los puntos de cada equipo
let tribunegra: Puntos = { punto: 0 };
let triburoja: Puntos = { punto: 0 };

// Obtener los elementos de entrada de puntos para cada equipo
//Es un array que contiene los elementos de entrada (inputs) de puntos de la tribu.
const inputs_tribunegra = [
    document.getElementById("Handball-a") as HTMLInputElement, // Input para los puntos de Handball de la tribu negra
    document.getElementById("Resistencias-a") as HTMLInputElement, // Input para los puntos de Resistencia de la tribu negra
    document.getElementById("Ajedrez-a") as HTMLInputElement // Input para los puntos de Ajedrez de la tribu negra
];

const inputs_triburoja = [
    document.getElementById("Handball-b") as HTMLInputElement, // Input para los puntos de Handball de la tribu roja
    document.getElementById("Resistencias-b") as HTMLInputElement, // Input para los puntos de Resistencia de la tribu roja
    document.getElementById("Ajedrez-b") as HTMLInputElement // Input para los puntos de Ajedrez de la tribu roja
];

// Elemento de salida para mostrar los resultados
const resultadosOutput = document.getElementById('resultados') as HTMLOutputElement;

// Función para agregar puntos a un equipo específico
function agregarPuntos(equipo: string) {
    if (equipo === 'tribu negra') {
        // Sumar los puntos de cada input de la tribu negra
      // *reduce* es un método del array que aplica una función a cada elemento del array, acumulando el resultado.
      // *acc* (acumulador): Este es el valor acumulado que se va construyendo a lo largo de la iteración.
        tribunegra.punto = inputs_tribunegra.reduce((acc, input) => acc + (parseInt(input.value, 10) || 0), 0);
    } else if (equipo === 'tribu roja') {
        // Sumar los puntos de cada input de la tribu roja
        triburoja.punto = inputs_triburoja.reduce((acc, input) => acc + (parseInt(input.value, 10) || 0), 0);
    }
}

// Función para mostrar los resultados de los puntos acumulados
function mostrarResultados() {
    let resultados = '';
    if (tribunegra.punto > triburoja.punto) {
        // Mensaje si la tribu negra tiene más puntos
        resultados = `La tribu negra es la ganadora con ${tribunegra.punto} puntos`;
    } else if (tribunegra.punto < triburoja.punto) {
        // Mensaje si la tribu roja tiene más puntos
        resultados = `La tribu roja es la ganadora con ${triburoja.punto} puntos`;
    } else {
        // Mensaje si ambos equipos están empatados
        resultados = `Ambos equipos están empatados con ${tribunegra.punto} puntos`;
    }
    // Mostrar el resultado en el elemento correspondiente
    resultadosOutput.innerText = resultados;
}

// Event listeners para ejecutar las funciones cuando se hace clic en los botones correspondientes
// Botón para agregar puntos a la tribu negra
document.querySelector('.tribu-negra button')?.addEventListener('click', () => {
    agregarPuntos('tribu negra'); // Llama a la función para agregar puntos a la tribu negra
});

// Botón para agregar puntos a la tribu roja
document.querySelector('.tribu-roja button')?.addEventListener('click', () => {
    agregarPuntos('tribu roja'); // Llama a la función para agregar puntos a la tribu roja
});

// Botón para mostrar los resultados
document.querySelector('button[onclick="mostrarResultados()"]')?.addEventListener('click', () => {
    mostrarResultados(); // Llama a la función para mostrar los resultados de los puntos
});
