// Estructuras que toman decisiones
//if-else(la utilizamos cuando solo evaluamos una condición)

let edad=20;
if(edad>=18){
    console.log("Felicidades, puedes votar")
}else {
    console.log("No tienes edad para votar")
}
  
//if-else if-else
let nota = 9.5;
if(nota >= 9 && nota <=10) {
    console.log("Excelente");
}
else if (nota >= 7 && nota <= 8.9) {
    console.log("Muy Bueno");
}else if (nota >= 5 && nota <7) 
    console.log("Bueno");
else{
    console.log("Reprobado");
}

//switch(se utiliza para cuando tenemos casos certeros a evaluar)
//formas de pago
let forma_pago="bitcoin";
switch(forma_pago){
    case "efectivo":
        console.log("Tú forma de pago es en efectivo");
        break;
    case "tarjeta":
        console.log("Tú forma de pago es con tarjeta");
        break;
     case "bitcoin":
        console.log("Tú forma de pago es bitcoin");
        break;
  
       

}