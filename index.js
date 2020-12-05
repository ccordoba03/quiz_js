
// punto numero1

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


//punto numero_2


function obtenerValorConImpuestos(){

let valorSin=document.getElementById("precio").value;
let tipoP=document.getElementById("producto").value;
let ingreso=parseInt(tipoP);
let ingreso_2=parseFloat(valorSin);


if(ingreso==1){
    document.getElementById("muestra_2").value=ingreso_2;
    document.getElementById("muestra").value=(ingreso_2*0.21)+ingreso_2;
} else if(ingreso==2){
    document.getElementById("muestra_2").value=ingreso_2;
 document.getElementById("muestra").value=(ingreso_2*0.10)+ingreso_2;
}else if(ingreso==3){
    document.getElementById("muestra_2").value=ingreso_2;
    document.getElementById("muestra").value=(ingreso_2*0.05)+ingreso_2;
}else{
    document.getElementById("muestra").value="solo existen tres categorias de productos";
}

}