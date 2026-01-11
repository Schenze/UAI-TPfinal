"use strict";
let acumuladorPuntaje = 0;
function setPuntaje()
{
    //30 puntos y bajar a cero por cada segundo y medio
    var puntajebase;
    let elLoop;
    puntajebase = 60;

    //console.log("Retrasado por 1 segundo y medio.");
    
    elLoop = setInterval(() => {// loop de 1 segundo
    puntajebase--; // Decrementa el contador
    console.log("puntaje bajando",puntajebase) // debug puntaje

       if (puntajebase <= 0 || !movimientos.length) 
        {
            if(movimientos[0] != celdaPos && perder == 1) // estoy muy cansado, no puedo pensar otro metodo sin usar este flag
            {
            clearInterval(elLoop);// detiene el temporizador
            //console.log("puntos totales ",acumulador);
            mostrarPuntaje(acumuladorPuntaje);
            console.log("El temporizador ha finalizado E.");
            console.log("Puntaje acumulados ELSE:", acumuladorPuntaje); // puntaje al final del RUN
            }else
            {
            acumularPuntaje(puntajebase);
            clearInterval(elLoop);// detiene el temporizador
            //console.log("puntos totales ",acumulador);
            mostrarPuntaje(acumuladorPuntaje);
            console.log("El temporizador ha finalizado.");
            console.log("Puntaje acumulados FINAL:", acumuladorPuntaje); // puntaje durante el RUN
            }
            
        }
        
    }, 1000);
}

function acumularPuntaje(puntos) {
    acumuladorPuntaje += puntos;
    console.log("Puntaje acumulado:", acumuladorPuntaje);
}

function mostrarPuntaje(acumuladorPuntaje)
{
    document.querySelector(".puntuacion").innerHTML = (acumuladorPuntaje);
}

function mostrarRanking(acumuladorPuntaje)
{

}

function adquirirNombre()
{

}