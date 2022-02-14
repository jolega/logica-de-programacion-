// en esta seccion se creo el comportamiento de un reloj con segundos, minutos y horas
//Importacion de Modulos, 

//Delcaracion de Variable,
let hora=0; 
let minuto=0;
let segundo=0;



//Declaracion de Funciones,

function reloj(){
for(let k=0;  k <= 23 ; k++ ){
    for(let j=0;  j <= 59 ; j++ ){       
          for(let i=0;  i <= 59 ; i++ ){
           console.log(` ${hora} ${minuto} ${segundo}`)
           segundo++;
           }
    segundo=0;
    minuto++;
    }
minuto=0; 
hora++;
}
}

//Ejecucion del Codigo
console.log(` ${hora} ${minuto} ${segundo}`)
reloj();
