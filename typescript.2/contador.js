;
var tribunegra = { punto: 0 };
var triburoja = { punto: 0 };
// Obtener los elementos de entrada de puntos
var Handball_input_tribunegra = document.getElementById("Handball-a");
var Resistencia_input_tribunegra = document.getElementById("Resistencia-a");
var Ajedrez_input_tribunegra = document.getElementById("Ajedrez-a");
var Handball_input_triburoja = document.getElementById("Handball-b");
var Resistencia_input_triburoja = document.getElementById("Resistencia-b");
var Ajedrez_input_triburoja = document.getElementById("Ajedrez-b");
// Elementos de salida
var resultadosOutput = document.getElementById('resultados');
function Agregarpuntos(equipo) {
    if (equipo === 'tribu negra') {
        tribunegra.punto += parseInt(Handball_input_tribunegra.value, 10) || 0;
        tribunegra.punto += parseInt(Resistencia_input_tribunegra.value, 10) || 0;
        tribunegra.punto += parseInt(Ajedrez_input_tribunegra.value, 10) || 0;
    }
    else if (equipo === 'tribu roja') {
        triburoja.punto += parseInt(Handball_input_triburoja.value, 10) || 0;
        triburoja.punto += parseInt(Resistencia_input_triburoja.value, 10) || 0;
        triburoja.punto += parseInt(Ajedrez_input_triburoja.value, 10) || 0;
    }
}
function mostrarResultados() {
    var resultados = '';
    if (tribunegra.punto > triburoja.punto) {
        resultados = 'La tribu negra es la ganadora con ' + tribunegra.punto + 'puntos';
    }
    else if (tribunegra.punto < triburoja.punto) {
        resultados = 'La tribu negra es la ganadora con' + triburoja.punto + 'puntos';
    }
    else {
        resultados = 'Ambos equipos están empatados con' + tribunegra.punto + 'puntos';
    }
    resultadosOutput.innerText = resultados;
}
