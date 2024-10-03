var tribunegra = {
    punto: 0
};
var triburoja = {
    punto: 0
};
var handball_input_tribunegra = document.getElementById("handball tribunegra");
var resistencia_input_tribunegra = document.getElementById("resistencia tribunegra");
var ajedrez_input_tribunegra = document.getElementById("Ajedrez tribunegra");
var handball_input_triburoja = document.getElementById("handball triburoja");
var resistencia_input_triburoja = document.getElementById("resistencia triburoja");
var ajedrez_input_triburoja = document.getElementById("Ajedrez triburoja");
var Outputpuntostribunegra = document.getElementById("puntos tribu negra");
var Outputpuntostriburoja = document.getElementById("puntos tribu roja");
function contars() {
    var contar_puntos_Handball_tribunegra = parseInt(handball_input_tribunegra.value, 10);
    var contar_puntos_Resistencia_tribunegra = parseInt(resistencia_input_tribunegra.value, 10);
    var contar_puntos_Ajedrez_tribunegra = parseInt(ajedrez_input_tribunegra.value, 10);
    var contar_puntos_handball_triburoja = parseInt(handball_input_triburoja.value, 10);
    var contar_puntos_resistencia_triburoja = parseInt(resistencia_input_triburoja.value, 10);
    var contar_puntos_ajedrez_triburoja = parseInt(ajedrez_input_triburoja.value, 10);
    tribunegra.punto += contar_puntos_Handball_tribunegra + contar_puntos_Resistencia_tribunegra + contar_puntos_Ajedrez_tribunegra;
    triburoja.punto += contar_puntos_handball_triburoja + contar_puntos_resistencia_triburoja + contar_puntos_ajedrez_triburoja;
    Outputpuntostribunegra.innerText += tribunegra.punto.toString();
    Outputpuntostriburoja.innerText += triburoja.punto.toString();
}
function mostrarresultados() {
    var mostrarresultadosbtn = document.getElementById("resultados totales");
}
