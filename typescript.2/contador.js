var _a, _b, _c;
// Inicialización de los puntos de cada equipo
var tribunegra = { punto: 0 };
var triburoja = { punto: 0 };
// Obtener los elementos de entrada de puntos para cada equipo
//Es un array que contiene los elementos de entrada (inputs) de puntos de la tribu.
var inputs_tribunegra = [
    document.getElementById("Handball-a"), // Input para los puntos de Handball de la tribu negra
    document.getElementById("Resistencias-a"), // Input para los puntos de Resistencia de la tribu negra
    document.getElementById("Ajedrez-a") // Input para los puntos de Ajedrez de la tribu negra
];
var inputs_triburoja = [
    document.getElementById("Handball-b"), // Input para los puntos de Handball de la tribu roja
    document.getElementById("Resistencias-b"), // Input para los puntos de Resistencia de la tribu roja
    document.getElementById("Ajedrez-b") // Input para los puntos de Ajedrez de la tribu roja
];
// Elemento de salida para mostrar los resultados
var resultadosOutput = document.getElementById('resultados');
// Función para agregar puntos a un equipo específico
function agregarPuntos(equipo) {
    if (equipo === 'tribu negra') {
        // Sumar los puntos de cada input de la tribu negra
        // *reduce* es un método del array que aplica una función a cada elemento del array, acumulando el resultado.
        // *acc* (acumulador): Este es el valor acumulado que se va construyendo a lo largo de la iteración.
        tribunegra.punto = inputs_tribunegra.reduce(function (acc, input) { return acc + (parseInt(input.value, 10) || 0); }, 0);
    }
    else if (equipo === 'tribu roja') {
        // Sumar los puntos de cada input de la tribu roja
        triburoja.punto = inputs_triburoja.reduce(function (acc, input) { return acc + (parseInt(input.value, 10) || 0); }, 0);
    }
}
// Función para mostrar los resultados de los puntos acumulados
function mostrarResultados() {
    var resultados = '';
    if (tribunegra.punto > triburoja.punto) {
        // Mensaje si la tribu negra tiene más puntos
        resultados = "La tribu negra es la ganadora con ".concat(tribunegra.punto, " puntos");
    }
    else if (tribunegra.punto < triburoja.punto) {
        // Mensaje si la tribu roja tiene más puntos
        resultados = "La tribu roja es la ganadora con ".concat(triburoja.punto, " puntos");
    }
    else {
        // Mensaje si ambos equipos están empatados
        resultados = "Ambos equipos est\u00E1n empatados con ".concat(tribunegra.punto, " puntos");
    }
    // Mostrar el resultado en el elemento correspondiente
    resultadosOutput.innerText = resultados;
}
// Event listeners para ejecutar las funciones cuando se hace clic en los botones correspondientes
// Botón para agregar puntos a la tribu negra
(_a = document.querySelector('.tribu-negra button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    agregarPuntos('tribu negra'); // Llama a la función para agregar puntos a la tribu negra
});
// Botón para agregar puntos a la tribu roja
(_b = document.querySelector('.tribu-roja button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    agregarPuntos('tribu roja'); // Llama a la función para agregar puntos a la tribu roja
});
// Botón para mostrar los resultados
(_c = document.querySelector('button[onclick="mostrarResultados()"]')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    mostrarResultados(); // Llama a la función para mostrar los resultados de los puntos
});
