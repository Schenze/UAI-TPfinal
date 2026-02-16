"use strict";
//var usuarios;
function cargarStorage()
{
    const datosGuardar = localStorage.getItem("puntuaciones");
    arrayJugador = datosGuardar ? JSON.parse(datosGuardar) : [];
    //debugObtenerTodo();
}

function guardarStorage()
{
    localStorage.setItem("puntuaciones", JSON.stringify(arrayJugador));
    //debugObtenerTodo();
}

// function anadirUsuarios(nombreElem,puntosElem)
// {
//     fechaActual = darFecha();
//     arrayJugador.push({nombre: nombreElem,puntos: puntosElem,fecha: fechaActual});
//     arrayJugador.sort((a, b) => b.puntos - a.puntos);
//     guardarStorage();
//     debugObtenerTodo();
// }

function limpiar() 
{
    arrayJugador = [];
    guardarStorage();
}

function debugObtenerTodo()
{
    escribirScoreboard();
    console.log(arrayJugador);
}

function autoGuardado()
{
    const checkboxElem = document.getElementById('guardado');
    const textoCheckboxElem = document.getElementById('textoCheckbox');

    if(checkboxElem.checked)
    {
        textoCheckboxElem.innerHTML = 'Los datos se guardan automaticamente';
        textoCheckboxElem.style.color = '#4CAF50';
        guardarStorage();// guardar si esta tildado pero no lo guarda? TODO reparame tonto
        //cargarStorage();
        console.log("Listo para guardar");
    }
    else
    {
        textoCheckboxElem.innerHTML = 'Guardado Desactivado';
        textoCheckboxElem.style.color = '#af0000';
    }
}

function filtroOpcion()
{
    const checkboxFiltroElem = document.getElementById('filtroPuntosFecha');
    const textoCheckboxFiltroElem = document.getElementById('textoFiltro');

    if(checkboxFiltroElem.checked)
    {
        textoCheckboxFiltroElem.innerHTML = 'Ordenado por Puntaje';
        textoCheckboxFiltroElem.style.color = '#c0ff6d';
        escribirScoreboard(checkboxFiltroElem.checked);
    }
    else
    {
        textoCheckboxFiltroElem.innerHTML = 'Ordenado por Fecha';
        textoCheckboxFiltroElem.style.color = '#5297ff';
        escribirScoreboard(checkboxFiltroElem.checked);
    }
}

document.querySelector("#debugSalvar").addEventListener("click",guardarStorage);
//document.querySelector("#debugCargar").addEventListener("click",cargarStorage);
//document.querySelector("#debugGuardar").addEventListener("click",limpiar);
document.querySelector("#guardado").addEventListener("click",autoGuardado);
document.querySelector("#filtroPuntosFecha").addEventListener("click",filtroOpcion);