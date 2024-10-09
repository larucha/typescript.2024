interface puntos {
    [discipline: string]: {
        tribunegra: number;
        triburoja: number;
    };
}

const point: puntos = {
    handball: { tribunegra: 0, triburoja: 0 },
    resistencia: { tribunegra: 0, triburoja: 0 },
    ajedrez: { tribunegra: 0, triburoja: 0 }
};

let tribunegra = { punto: 0 };
let triburoja = { punto: 0 };

// Obtener los elementos de entrada de puntos
const handball_input_tribunegra = document.getElementById("handball tribunegra") as HTMLInputElement;
const resistencia_input_tribunegra = document.getElementById("resistencia tribunegra") as HTMLInputElement;
const ajedrez_input_tribunegra = document.getElementById("Ajedrez tribunegra") as HTMLInputElement;

const handball_input_triburoja = document.getElementById("handball triburoja") as HTMLInputElement;
const resistencia_input_triburoja = document.getElementById("resistencia triburoja") as HTMLInputElement;
const ajedrez_input_triburoja = document.getElementById("Ajedrez triburoja") as HTMLInputElement;

// Elementos de salida
const Outputpuntostribunegra = document.getElementById("puntos tribu negra") as HTMLElement;
const Outputpuntostriburoja = document.getElementById("puntos tribu roja") as HTMLElement;

function agruparpuntos(): void {
    let contar_puntos_Handball_tribunegra = parseInt(handball_input_tribunegra.value, 10) || 0;
    let contar_puntos_Resistencia_tribunegra = parseInt(resistencia_input_tribunegra.value, 10) || 0;
    let contar_puntos_Ajedrez_tribunegra = parseInt(ajedrez_input_tribunegra.value, 10) || 0;

    let contar_puntos_handball_triburoja = parseInt(handball_input_triburoja.value, 10) || 0;
    let contar_puntos_resistencia_triburoja = parseInt(resistencia_input_triburoja.value, 10) || 0;
    let contar_puntos_ajedrez_triburoja = parseInt(ajedrez_input_triburoja.value, 10) || 0;

    tribunegra.punto = contar_puntos_Handball_tribunegra + contar_puntos_Resistencia_tribunegra + contar_puntos_Ajedrez_tribunegra;
    triburoja.punto = contar_puntos_handball_triburoja + contar_puntos_resistencia_triburoja + contar_puntos_ajedrez_triburoja;

    Outputpuntostribunegra.innerText = `Puntos de la tribu negra: ${tribunegra.punto}`;
    Outputpuntostriburoja.innerText = `Puntos de la tribu roja: ${triburoja.punto}`;
}

// Sumamos los puntos acumulados en `point`
for (const discipline in point) {
    tribunegra.punto += point[discipline].tribunegra;
    triburoja.punto += point[discipline].triburoja;
}

function mostrarresultados() {
    const resultadoElement = document.getElementById("resultado") as HTMLElement;
    resultadoElement.innerHTML = `El equipo con más puntos en total es: ${
        tribunegra.punto > triburoja.punto ? "Tribu Negra" : "Tribu Roja"
    }`;
}
