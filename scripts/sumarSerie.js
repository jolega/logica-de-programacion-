// en esta seccion se creo la suma de todos los numeros en un intervalo, entre el numero inicial y el final 
//Importacion de Modulos, 

//Delcaracion de Variable, 

let numeroInicial=0;
let numeroFinal=10;
let sumatoria=0;

//Declaracion de Funciones,

function sumar(){

    

    for(i=numeroInicial;i<=numeroFinal;i++){
        sumatoria+=i;
    }
}


//Ejecucion del Codigo

sumar();
console.log(` la suma de la cantidad de numeros entre ${numeroInicial} y ${numeroFinal} el valor es ${sumatoria}`);
