interface puntos {
        punto:number;
    };

let tribunegra = { punto: 0 };
let triburoja = { punto: 0 };


// Obtener los elementos de entrada de puntos
const handball_input_tribunegra = document.getElementById("handball-a") as HTMLInputElement;
const resistencia_input_tribunegra = document.getElementById("resistencia-a") as HTMLInputElement;
const ajedrez_input_tribunegra = document.getElementById("Ajedrez-a") as HTMLInputElement;

const handball_input_triburoja = document.getElementById("handball-b") as HTMLInputElement;
const resistencia_input_triburoja = document.getElementById("resistencia-b") as HTMLInputElement;
const ajedrez_input_triburoja = document.getElementById("Ajedrez-b") as HTMLInputElement;

// Elementos de salida
const Outputpuntostribunegra = document.getElementById('resultado') as HTMLElement;
const Outputpuntostriburoja = document.getElementById("puntos tribu roja") as HTMLElement;

function Agregarpuntos(equipo:string): void {
    if(equipo ==='tribu negra'){
    tribunegra.punto += parseInt(handball_input_tribunegra.value, 10) || 0;
    tribunegra.punto += parseInt(resistencia_input_tribunegra.value, 10) || 0;
    tribunegra.punto += parseInt(ajedrez_input_tribunegra.value, 10) || 0;
    }else if (equipo === 'tribu roja'){
    triburoja.punto += parseInt(handball_input_triburoja.value, 10) || 0;
    triburoja.punto += parseInt(resistencia_input_triburoja.value, 10) || 0;
    triburoja.punto += parseInt(ajedrez_input_triburoja.value, 10) || 0;
    }
}

function mostrarResultados() {
    let resultado ='';
    if(tribunegra.punto > triburoja.punto) {
        resultado='La tribu negra es la ganadora con' + tribunegra.punto + 'puntos';
    }else if (tribunegra.punto < triburoja.punto) {
        resultado='La tribu negra es la ganadora con' + triburoja.punto + 'puntos';
    }else {
        resultado = 'Ambos equipos están empatados con' + tribunegra.punto + 'puntos';
    }
    
    Outputpuntostribunegra.innerText = resultado;
    
}
