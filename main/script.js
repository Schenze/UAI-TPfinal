"use strict";
let movimientos,movTotales,celdaPos;
var perder = 0; // flag, para verificar si pierde o no

document.addEventListener('DOMContentLoaded', () => {
  cargarStorage();// siempre se ejecuta lo primero de todo y espera que el HTML este cargado
  escribirScoreboard(); // escribir el scoreboard
  //console.log("deberia de ejecutar el storage del principio");
});

function validacionInput()
{
    
    let nombre = document.getElementById("inputNombre").value;
    let nombreEX = /^[a-zA-Z0-9]{3,}$/;

    if (nombreEX.test(nombre) == true)
    {
        document.getElementById("validacionNombre").innerHTML = "Nombre Valido";
        document.getElementById("validacionNombre").style.color = "green";
        celdas.forEach(celda => {
        celda.addEventListener("click",celdaClick);
        })
        perder=0;
        comenzarJuego();
    }else{
        document.getElementById("validacionNombre").innerHTML = "Nombre NO Valido";
        document.getElementById("validacionNombre").style.color = "red";
        movimientos = 0; // borrar?
    }
}


function iluminar(celdaPos,tiempo)
{
    setTimeout(() => {
       document.querySelector('.celda[pos="' + celdaPos + '"]').classList.add('activo');
       setTimeout(() => {
        document.querySelector('.celda[pos="' + celdaPos + '"]').classList.remove('activo');
        }, 300);
    },tiempo);
}

function hacerMovimientos(movActual)
{
    movimientos.push( Math.floor(Math.random() * 4) + 1); // genera movimientos aleatoreos
    if(movActual < movTotales){
        hacerMovimientos(movActual + 1);
    }
}

function comenzarJuego()
{
    movimientos = [];
    movTotales = 2;
    document.querySelector(("#comienzo")).style.display = "none";
    document.querySelector(("#debugSalvar")).style.display = "none";
    document.querySelector(("#mensaje")).style.display = "block";
    secuencia();
    document.querySelector(".puntuacion").innerHTML = "0";
    const cambioNombre = document.getElementById("inputNombre");// desabilita la edicion del nombre
    cambioNombre.readOnly = true;
    cambioNombre.style.backgroundColor = "#000000";  // Fondo rojo claro
    cambioNombre.style.color = "#cc0000";             // Texto rojo
    cambioNombre.style.border = "2px solid #ff0000";  // Borde rojo
}

function secuencia(nivel)
{
    movimientos = [];
    hacerMovimientos(1);
    
    for (let i = 0; i < movimientos.length; i++)
    {
        iluminar(movimientos[i],600*i)
    }
    
    setTimeout(() => {
       document.querySelector("#mensaje").innerHTML = "Haz el patron";
    }, 600 * movimientos.length);

    insertarRanking(nivel);
}

function celdaClick(e)
{
    console.log("Celda Click!");
    console.log("perder: ",perder);
    celdaPos = e.target.getAttribute("pos");
    if(perder === 0){
        iluminar(celdaPos,0); // esto resuelve el bug de prender las luces aunque el juego no este andando
    }
    
    if(movimientos && movimientos.length)
    {
        if(movimientos[0]==celdaPos)
        {
            perder = 0;
            movimientos.shift();
            if(!movimientos.length)
            {
                movTotales++;
                setTimeout(() => {
                //console.log("SetPuntaje esta aqui!.");
                setPuntaje();
                secuencia();
                },1000);
            }
        }
        else{
            perder = 1;
            movimientos = [];// este maldito tiene que reiniciarse por que sino el jugador puede jugar despues de perder.
            document.querySelector("#mensaje").innerHTML = "Game over!";
            setTimeout(() => {
                document.querySelector("#comienzo").style.display = "block";
                document.querySelector("#debugSalvar").style.display = "block";
                document.querySelector("#mensaje").style.display = "none";
            }, 1000);
                const cambioNombre = document.getElementById("inputNombre");// habilita la edicion del nombre
                cambioNombre.readOnly = false;
                cambioNombre.style.backgroundColor = "";  // Fondo rojo claro
                cambioNombre.style.color = "";             // Texto rojo
                cambioNombre.style.border = "";  // Borde rojo
            //escribirScoreboard(); // test, cuando pierde escribir en el Scoreboard
        }
    }
}


document.querySelector("#comienzo").addEventListener("click",validacionInput);
//document.querySelector("#comienzo").addEventListener("click",comenzarJuego);
document.querySelector("#comienzo").addEventListener("click",setPuntaje);
let celdas = Array.from(document.getElementsByClassName("celda"));
