$(document).ready(function(){
    //se ejecutara cuando la la pagina este cargada completamnete
    var tablapersona = $("#tablaPersonas");

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
});