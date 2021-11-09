$(document).ready(function(){
    //se ejecutara cuando la la pagina este cargada completamnete
    var personnas = ["mario","luis","favio",300,1.24];
    var lista = $("#listadopersonas");
    
    var htm="";
  /* for(i=0;i<personnas.length;i++){
    htm+="<li>"+i"</li>";
   }
  */
   personnas.forEach(function(item){
       htm+="<li>"+item +"</li>";
   });
   lista.html(htm);
});