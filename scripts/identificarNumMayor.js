// en esta seccion se creo la identificacion de que numero es mayoy
//Importacion de Modulos, 

//Delcaracion de Variable, 


let numeroUno=10
let numeroDos=5

//Declaracion de Funciones,

function numeroMayor(){

        if(numeroUno > numeroDos ){
            console.log(` El numero  ${numeroUno} es mayor que  ${numeroDos} `)
            <button data-tf-popup="EmcavTKa" data-tf-auto-close="2000" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#379CFB;color:#000000;font-size:17px;border-radius:21px;padding:0 28px;font-weight:bold;height:42.5px;cursor:pointer;line-height:42.5px;text-align:center;margin:0;text-decoration:none;">Enter the Giveaway</button><script src="//embed.typeform.com/next/embed.js"></script>
        }
        else if  (numeroUno < numeroDos ){
            console.log(` El numero  ${numeroDos} es mayor que  ${numeroUno} `)
        }
        else{
            console.log(` Los numeros son iguales  ${numeroDos} y  ${numeroUno} `)
        }
}

//Ejecucion del Codigo

numeroMayor();