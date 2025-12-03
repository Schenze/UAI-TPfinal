"use strict";

let movimientos,movTotales;

function iluminar(celdaPos,tiempo)
{
    setTimeout(() => {
       document.querySelector('.celda[pos="' + celdaPos + '"]').classList.add('activo');
       setTimeout(() => {
        document.querySelector('.celda[pos="' + celdaPos + '"]').classList.remove('activo');
        }, 500);
    },tiempo);
}

function hacerMovimientos(movActual)
{
    movimientos.push( Math.floor(Math.random() * 4) + 1);
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
    let celdaPos = e.target.getAttribute("pos");
    iluminar(celdaPos,0);

    if(movimientos && movimientos.length)
    {
        if(movimientos[0]==celdaPos)
        {
            movimientos.shift();
            if(!movimientos.length)
            {
                movTotales++;
                setTimeout(() => {
                    secuencia();
                },1000);
            }
        }
        else{
            document.querySelector("#mensaje").innerHTML = "Game over!";
            setTimeout(() => {
                document.querySelector("#comienzo").style.display = "block";
                document.querySelector("#mensaje").style.display = "none";
            }, 1000);
        }
    }
}

document.querySelector("#comienzo").addEventListener("click",comenzarJuego);
let celdas = Array.from(document.getElementsByClassName("celda"));
celdas.forEach(celda => {
    celda.addEventListener("click",celdaClick)
})