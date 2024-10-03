interface puntos{
    punto:number;
}

let tribunegra:puntos={
    punto:0
}

let triburoja:puntos={
    punto:0
}

const handball_input_tribunegra= document.getElementById ("handball tribunegra") as HTMLInputElement;
const resistencia_input_tribunegra= document.getElementById  ("resistencia tribunegra") as HTMLInputElement;
const ajedrez_input_tribunegra= document.getElementById  ("Ajedrez tribunegra") as HTMLInputElement;


const handball_input_triburoja= document.getElementById("handball triburoja") as HTMLInputElement;
const resistencia_input_triburoja= document.getElementById("resistencia triburoja") as HTMLInputElement;
const ajedrez_input_triburoja= document.getElementById("Ajedrez triburoja") as HTMLInputElement;

const Outputpuntostribunegra=document.getElementById("puntos tribu negra") as HTMLElement;
const Outputpuntostriburoja=document.getElementById("puntos tribu roja") as HTMLElement;

function contars():void {
    let contar_puntos_Handball_tribunegra:number=parseInt(handball_input_tribunegra.value,10);
    let contar_puntos_Resistencia_tribunegra:number=parseInt(resistencia_input_tribunegra.value,10);
    let contar_puntos_Ajedrez_tribunegra:number=parseInt(ajedrez_input_tribunegra.value,10);
    
    let contar_puntos_handball_triburoja:number=parseInt(handball_input_triburoja.value,10);
    let contar_puntos_resistencia_triburoja:number=parseInt(resistencia_input_triburoja.value,10);
    let contar_puntos_ajedrez_triburoja:number=parseInt(ajedrez_input_triburoja.value,10);
    
    tribunegra.punto+=contar_puntos_Handball_tribunegra+contar_puntos_Resistencia_tribunegra+contar_puntos_Ajedrez_tribunegra;
    triburoja.punto+=contar_puntos_handball_triburoja+contar_puntos_resistencia_triburoja+contar_puntos_ajedrez_triburoja;

    Outputpuntostribunegra.innerText+=tribunegra.punto.toString();
    Outputpuntostriburoja.innerText+=triburoja.punto.toString();

}
function mostrarresultados():void{
    const mostrarresultadosbtn=document.getElementById("resultados totales")as HTMLButtonElement;

}