;
var tribunegra = { punto: 0 };
var triburoja = { punto: 0 };
// Obtener los elementos de entrada de puntos
var handball_input_tribunegra = document.getElementById("handball-a");
var resistencia_input_tribunegra = document.getElementById("resistencia-a");
var ajedrez_input_tribunegra = document.getElementById("Ajedrez-a");
var handball_input_triburoja = document.getElementById("handball-b");
var resistencia_input_triburoja = document.getElementById("resistencia-b");
var ajedrez_input_triburoja = document.getElementById("Ajedrez-b");
// Elementos de salida
var Outputpuntostribunegra = document.getElementById('resultado');
var Outputpuntostriburoja = document.getElementById("puntos tribu roja");
function Agregarpuntos(equipo) {
    if (equipo === 'tribu negra') {
        tribunegra.punto += parseInt(handball_input_tribunegra.value, 10) || 0;
        tribunegra.punto += parseInt(resistencia_input_tribunegra.value, 10) || 0;
        tribunegra.punto += parseInt(ajedrez_input_tribunegra.value, 10) || 0;
    }
    else if (equipo === 'tribu roja') {
        triburoja.punto += parseInt(handball_input_triburoja.value, 10) || 0;
        triburoja.punto += parseInt(resistencia_input_triburoja.value, 10) || 0;
        triburoja.punto += parseInt(ajedrez_input_triburoja.value, 10) || 0;
    }
}
function mostrarResultados() {
    var resultado = '';
    if (tribunegra.punto > triburoja.punto) {
        resultado = 'La tribu negra es la ganadora con' + tribunegra.punto + 'puntos';
    }
    else if (tribunegra.punto < triburoja.punto) {
        resultado = 'La tribu negra es la ganadora con' + triburoja.punto + 'puntos';
    }
    else {
        resultado = 'Ambos equipos están empatados con' + tribunegra.punto + 'puntos';
    }
    Outputpuntostribunegra.innerText = resultado;
}
