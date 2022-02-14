// en esta seccion importa un json y lo muestra en una tabla

//Importacion de Modulos, 

//Delcaracion de Variable, 


//Declaracion de Funciones,

// leer e imprimir en consola
    $.get("json/contenido.json",function(datos){
        console.log(datos)
   });
// leer y cargar a la tabla  

$.ajax({
    type: 'GET',
    url: 'json/contenido.json',
    dataType:  'json'
    

}).done((data) =>{
    $.each(data,function(indice,persona){
        let fila= $('<tr> ');
            fila.append($(`<td> ${persona.id} </td> `));
            fila.append($(`<td> ${persona.nombre} </td> `));
            fila.append($(`<td> ${persona.apellido} </td> `));
            fila.append($(`<td> ${persona.edad} </td> `));
        $('#personas').append(fila)
     
    })
    $('#personas').show();  
});

// leer datos de la api con  basic auth

$.get("json/contenido.json",function(datos){
    console.log(datos)
})

$.ajax
({
    type: "GET",
    url: "https://api.sandbox.guesty.com/api/v2/listings/",
    dataType: 'json',
    headers: {
        //   'Authorization': "Basic " + btoa(USERNAME + ":" + PASSWORD)
     "Authorization": "Basic " + btoa("6ae53ffb4addcb0929e845c6a385ef21" + ":" + "ab828ea3ce2a76564587fbb063ffe5ff")
     },
    data: '{ "comment" }',
     success: function (){
      alert('Thanks for your comment!'); 
     }
    }).done((lectura) =>{
    console.log(lectura)
});

//Ejecucion del Codigo
//..
