//1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

for(repetiçao = 10; repetiçao <=60; repetiçao+=5){

   if (repetiçao ===35 || repetiçao ===45 ){
      console.log("PULOU")
       continue


}
   console.log(repetiçao)
   
} 
