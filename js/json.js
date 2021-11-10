
function dibujarTabla(persona){

    var tablapersona = $("#tablaPersonas");

    var html4="<tr><th>Nombre</th><th>Apelldio</th><th>Edad</th></tr>";
    persona.forEach(function(item){
        html4+="<tr>";
        html4+="<td>";
        html4+=item.nombre;
        html4+="</td>"
        html4+="<td>";
        html4+=item.apellido;
        html4+="</td>"
        html4+="<td>";
        html4+=item.edad;
        html4+="</td>"
        html4+="</tr>"
    });
    tablapersona.html(html4);
}

function limpiar(){
    $("#txtNombre").val("");
    $("#txtApellido").val("");
    $("#txtEdad").val("");

}

$(document).ready(function(){
    //se ejecutara cuando la la pagina este cargada completamnete

    var persona =[{
        "nombre" :"juan",
        "apellido":"urrutia",
        "edad":24
    },
    {
        "nombre" :"Ana",
        "apellido":"Diaz",
        "edad":20
    }
    ]


    var botonguardar =$("#btnGuardar");
    botonguardar.click(function(){
        var tomaNombre= $("#txtNombre").val();
        var tomaApp= $("#txtApellido").val();
        var tomaEdad= $("#txtEdad").val();
        var listerrores =$("#listadoerrores");

        var errores=[];

        if (tomaNombre.length<3 || tomaNombre.length>15){
            errores.push("ingrese un nombre correcto");
        }else if(tomaNombre==""){
            errores.push("el nombre no puede estar vacio");
        }if (tomaApp==""){
            errores.push("el apellido no puede estar vacio");
        }else if (tomaApp.length<3 || tomaApp.length>15){
            errores.push("ingrese un apellido correcto");
        }if (tomaEdad==""){
            errores.push("la edad no puede estar vacio");

        }else if(isNaN(tomaEdad)){
            errores.push("ingrese numeros");
        
        }if(errores.length>0){

            var html5="";
            errores.forEach(function(item){
                html5+="<li>"+item+"</li>";
            });
            listerrores.html(html5);
            return;
        }

        listerrores.html("");

        var datos = {
            "nombre":tomaNombre,
            "apellido":tomaApp,
            "edad":tomaEdad
        }
        persona.push(datos);
        dibujarTabla(persona);
        limpiar();
        

      
        });
        dibujarTabla(persona);


        var btnLimpiar =$("#btnLimpiar");
        btnLimpiar.click(function(){
            limpiar();
        });
    });

   


   
