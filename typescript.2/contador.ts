interface puntos {
        punto:number;
    };

let tribunegra = { punto: 0 };
let triburoja = { punto: 0 };


// Obtener los elementos de entrada de puntos
const Handball_input_tribunegra = document.getElementById("Handball-a") as HTMLInputElement;
const Resistencia_input_tribunegra = document.getElementById("Resistencia-a") as HTMLInputElement;
const Ajedrez_input_tribunegra = document.getElementById("Ajedrez-a") as HTMLInputElement;

const Handball_input_triburoja = document.getElementById("Handball-b") as HTMLInputElement;
const Resistencia_input_triburoja = document.getElementById("Resistencia-b") as HTMLInputElement;
const Ajedrez_input_triburoja = document.getElementById("Ajedrez-b") as HTMLInputElement;

// Elementos de salida
const resultadosOutput = document.getElementById('resultados') as HTMLOutputElement;


function Agregarpuntos(equipo:string) {
    if(equipo ==='tribu negra'){
    tribunegra.punto += parseInt(Handball_input_tribunegra.value, 10) || 0;
    tribunegra.punto += parseInt(Resistencia_input_tribunegra.value, 10) || 0;
    tribunegra.punto += parseInt(Ajedrez_input_tribunegra.value, 10) || 0;
    }else if (equipo === 'tribu roja'){
    triburoja.punto += parseInt(Handball_input_triburoja.value, 10) || 0;
    triburoja.punto += parseInt(Resistencia_input_triburoja.value, 10) || 0;
    triburoja.punto += parseInt(Ajedrez_input_triburoja.value, 10) || 0;
    }
}

function mostrarResultados() {
    let resultados ='';
    if (tribunegra.punto > triburoja.punto) {
        resultados= 'La tribu negra es la ganadora con ' +  tribunegra.punto  + 'puntos';
    }else if (tribunegra.punto < triburoja.punto) {
        resultados='La tribu negra es la ganadora con' + triburoja.punto + 'puntos';
    }else {
        resultados = 'Ambos equipos están empatados con' + tribunegra.punto + 'puntos';
    }
    
    resultadosOutput.innerText = resultados;
    
}
