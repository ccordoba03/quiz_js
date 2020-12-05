
function tipoMotor(){

let numero_motor=document.getElementById("motor").value;
let numero=parseInt(numero_motor);
if(numero==0){

    document.write("No hay establecido un valor definido para el tipo de bomba");
}else if(numero==1){
    document.write("La bomba es una bomba de agua");

}else if(numero==2){

    document.write("La bomba es una bomba de Gasolina");

}else if(numero==3){

    document.write("La bomba es una bomba de Hormigon");
}else if(numero==4){
    document.write("La bomba es una bomba de pasta alimenticia");

}else{

    document.write ("no existe un valor valido para el tipo de bomba");
}};
