"use strict";
let movimientos,movTotales,celdaPos;
var perder = 0; // flag, para verificar si pierde o no

function validacionInput()
{
    let nombre = document.getElementById("inputNombre").value;
    let nombreEX = /^[a-zA-Z0-9]{3,}$/;

    if (nombreEX.test(nombre))
    {
        document.getElementById("texto").innerHTML = "Nombre Valido";
        document.getElementById("texto").style.color = "green";
        comenzarJuego();
    }else{
        document.getElementById("texto").innerHTML = "Nombre NO Valido";
        document.getElementById("texto").style.color = "red";
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
    document.querySelector(("#mensaje")).style.display = "block";
    secuencia();
    document.querySelector(".puntuacion").innerHTML = "0";
}

function secuencia()
{
    movimientos = [];
    hacerMovimientos(1);
    document.querySelector("#mensaje").innerHTML = "Simon Dice!";

    for (let i = 0; i < movimientos.length; i++)
    {
        iluminar(movimientos[i],600*i)
    }
    
    setTimeout(() => {
       document.querySelector("#mensaje").innerHTML = "Haz el patron";
    }, 600 * movimientos.length);

}

function celdaClick(e)
{
    celdaPos = e.target.getAttribute("pos");
    iluminar(celdaPos,0);

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
                console.log("SetPuntaje esta aqui!.");
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
                document.querySelector("#mensaje").style.display = "none";
            }, 1000);
        }
    }
}

document.querySelector("#comienzo").addEventListener("click",validacionInput);
//document.querySelector("#comienzo").addEventListener("click",comenzarJuego);
document.querySelector("#comienzo").addEventListener("click",setPuntaje);
let celdas = Array.from(document.getElementsByClassName("celda"));

celdas.forEach(celda => {
    celda.addEventListener("click",celdaClick);
})


formulario.addEventListener('submit',(e) => {
    e.preventDefault();
});