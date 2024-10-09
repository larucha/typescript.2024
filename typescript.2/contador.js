var point = {
    handball: { tribunegra: 0, triburoja: 0 },
    resistencia: { tribunegra: 0, triburoja: 0 },
    ajedrez: { tribunegra: 0, triburoja: 0 }
};
var tribunegra = { punto: 0 };
var triburoja = { punto: 0 };
// Obtener los elementos de entrada de puntos
var handball_input_tribunegra = document.getElementById("handball tribunegra");
var resistencia_input_tribunegra = document.getElementById("resistencia tribunegra");
var ajedrez_input_tribunegra = document.getElementById("Ajedrez tribunegra");
var handball_input_triburoja = document.getElementById("handball triburoja");
var resistencia_input_triburoja = document.getElementById("resistencia triburoja");
var ajedrez_input_triburoja = document.getElementById("Ajedrez triburoja");
// Elementos de salida
var Outputpuntostribunegra = document.getElementById("puntos tribu negra");
var Outputpuntostriburoja = document.getElementById("puntos tribu roja");
function agruparpuntos() {
    var contar_puntos_Handball_tribunegra = parseInt(handball_input_tribunegra.value, 10) || 0;
    var contar_puntos_Resistencia_tribunegra = parseInt(resistencia_input_tribunegra.value, 10) || 0;
    var contar_puntos_Ajedrez_tribunegra = parseInt(ajedrez_input_tribunegra.value, 10) || 0;
    var contar_puntos_handball_triburoja = parseInt(handball_input_triburoja.value, 10) || 0;
    var contar_puntos_resistencia_triburoja = parseInt(resistencia_input_triburoja.value, 10) || 0;
    var contar_puntos_ajedrez_triburoja = parseInt(ajedrez_input_triburoja.value, 10) || 0;
    tribunegra.punto = contar_puntos_Handball_tribunegra + contar_puntos_Resistencia_tribunegra + contar_puntos_Ajedrez_tribunegra;
    triburoja.punto = contar_puntos_handball_triburoja + contar_puntos_resistencia_triburoja + contar_puntos_ajedrez_triburoja;
    Outputpuntostribunegra.innerText = "Puntos de la tribu negra: ".concat(tribunegra.punto);
    Outputpuntostriburoja.innerText = "Puntos de la tribu roja: ".concat(triburoja.punto);
}
// Sumamos los puntos acumulados en `point`
for (var discipline in point) {
    tribunegra.punto += point[discipline].tribunegra;
    triburoja.punto += point[discipline].triburoja;
}
function mostrarresultados() {
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "El equipo con m\u00E1s puntos en total es: ".concat(tribunegra.punto > triburoja.punto ? "Tribu Negra" : "Tribu Roja");
}
