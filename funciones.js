//bloque de código para realizar una accion.
//se pueden reutilizar
//forma comun de hacer una function
concole.log("-------------FUNCIONES EN JavaScrip----------")
function utilizarDowhile(){
    //ciclo do while--la primera iteración para(verdadero)
  let k=11;
  do{
     console.log(k);
    }while(k<=11)  
}utilizarDowhile()

concole.log("-------------FUNCIONES CON PARAMETROS----------")

//funciones con parametros
//los parametros, pueden cambiar de valor
//utilizar while
function utilizarwhile(contador){
    let j=1;
    while(j<=10){
        console.log(j)
        j++
} 
}
utilizarDowhile(5)//le digo de donde inicia, aqui incia en 5
console.log("_____________________________")
utilizarDowhile(1)//aqui inicia en 1
//5 y 1, es un argumento, y se almacena en un parametro.
