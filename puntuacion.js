"use strict";
let acumuladorPuntaje = 0;
var nivel = 1;

function setPuntaje()
{
    if(movTotales > 0) // chequea si en realidad empezamos el juego, sino el puntaje se va a al infinito
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
                console.log("Puntaje acumulados Al perder!:", acumuladorPuntaje); // puntaje al final del RUN
                console.log("Nivel:", nivel);
                anadirJugadores(acumuladorPuntaje);
                acumuladorPuntaje = 0;// resetar el puntaje luego de que el score del usuario se agrege
                nivel = 1;
                limpiarNivelPuntuacion(acumuladorPuntaje);
            }else
                {
                acumularPuntaje(puntajebase);
                clearInterval(elLoop);// detiene el temporizador
                //console.log("puntos totales ",acumulador);
                mostrarPuntaje(acumuladorPuntaje);
                console.log("El temporizador ha finalizado.");
                console.log("Puntaje acumulados FINAL:", acumuladorPuntaje); // puntaje durante el RUN
                insertarRanking(nivel);
                console.log("Nivel:", nivel);
                }   // algo que anote los puntos y probablemente un boton para guardar y un check de auto save
            
            }
        
        }, 1000);
    }
}

function acumularPuntaje(puntos) {
    acumuladorPuntaje += puntos;
    console.log("Puntaje acumulado:", acumuladorPuntaje);
    nivel++;
}

function mostrarPuntaje()
{
    document.querySelector(".puntuacion").innerHTML = (acumuladorPuntaje);
}

function insertarRanking()
{
    document.querySelector(".nivel").innerHTML = (nivel); // como poner un numero ahi?
}

function limpiarNivelPuntuacion()
{
    document.querySelector(".nivel").innerHTML = ("-");
    document.querySelector(".puntuacion").innerHTML = ("-");
    escribirScoreboard(); //debug remover
}