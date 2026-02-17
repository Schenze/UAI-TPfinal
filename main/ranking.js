"use Strict"
//Actualizar el leaderboard.
//Si existen nombres en el leaderboard hacer aparecer el board, sino invisible
//var usuario,puntos,tiempo;

var nombreElem;
let arrayJugador = [];
console.log("El array es: ",arrayJugador);

function escribirScoreboard(filtro)
{
    rankingTabla = document.getElementById("rankings");
    rankingTabla.innerHTML = "";
    if (filtro) //deberia de cambiar de filtros
    {
        // De mayor a menor puntos
        arrayJugador.sort((a, b) => b.puntos - a.puntos);
    }else
        {
        // De más reciente a más antigua
        arrayJugador.sort((a, b) => new Date (b.fecha) - new Date (a.fecha));
        }
    
        arrayJugador.forEach((jugador,indice) => {
        const fila = document.createElement("div");
        fila.classList.add("tablafila");
        //<div class="col-posicion">${indice + 1}</div>
        // espacio?! wow
        fila.innerHTML = `
          <div class="col-posicion">${"----------"}</div>
          <div class="col-nombre">${jugador.nombre}</div>
          <div class="col-puntos">${jugador.puntos + " Puntos"}</div>
          <div class="col-tiempo">${jugador.fecha}</div>
        `;
        rankingTabla.appendChild(fila);
        console.log("El array nuevo FINAL: ",arrayJugador);
    })
}

function anadirJugadores(acumuladorPuntaje)
{

    nombreElem = document.getElementById("inputNombre").value;
    rankingTabla = document.getElementById("rankings");
    puntosElem = acumuladorPuntaje;
    fechaActual = darFecha();
    arrayJugador.push({nombre: nombreElem,puntos: puntosElem,fecha: fechaActual});
    console.log("El array: ",arrayJugador);
    //const rankElem = document.getElementById("rank");
    escribirScoreboard();
}

function darFecha()// da fecha en formato dia/mes/año
{
    const tiempo = new Date();
    const [dia, mes, anio] = [
    tiempo.getDate(),
    tiempo.getMonth()+1, // el mes empieza desde 0, okay?
    tiempo.getFullYear(),   
];
const tiempoSimple = dia + "/" + mes + "/" + anio;
//console.log("FECHA Debug: DIA: ",dia," MES: ",mes," Anio: ",anio);// debug remover luego
return tiempoSimple;
}