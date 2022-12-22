/* 
    5) Mostrar el listado de números pares comprendidos entre el 0 y el 50.

let i;

for(i = 0; i <= 50; i+=2 ){   
    console.log(i)
}
*/

/* PAR
for(i = 0; i <= 50; i++ ){
    if(i % 2 === 0){
        console.log(i)
    }
}

   IMPAR
for(i = 0; i <= 50; i++ ){
    if(i % 2 - 1===0){
        console.log(i)
    }
}
*/

/*
6) Generá la siguiente salida por consola:
1
12
123
1234
12345
1234
123
12
1


let i, cont = 0, anterior="";

for (i = 1; i <= 5; i++) {
  anterior = ""
  for (let j = 1; j <= i; j++) {
    anterior = anterior + j
  }
  console.log(anterior);
}

for (let i = 4; i >= 1; i--) {
  anterior = ""
  for (let j = 1; j <= i; j++) {
    anterior = anterior + j
  }
  
  console.log(anterior);
}
*/


/*
Crea un script que escriba los números del 1 al 10, que indique cuáles son múltiplos 
de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
*/
let i, leyenda;
for(i = 1;i <= 405; i++){
    leyenda = ''
    leyenda = i
    if(i % 4 === 0){
            leyenda = leyenda + ' (Múltiplo de 4)' 
      }
      if(i % 9 === 0){
          leyenda = leyenda + ' (Múltiplo de 9)' 
      }
      if(i % 5 === 0){
          leyenda = leyenda + '\n ---------------------------------' 
      }
        
        
        console.log(leyenda)
    }



let maximo = 0 
for(i=0; i <= 5; i++){
  console.log("Nivel " + i)
  for(j = 1; j <= 4; j++){
    console.log("Piso " + Number(Number(j) + Number(maximo)))
    if(j === 4){
      maximo = maximo + j
    }
  }

}