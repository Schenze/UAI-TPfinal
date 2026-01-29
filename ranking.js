"use Strict"
//Actualizar el leaderboard.
//Si existen nombres en el leaderboard hacer aparecer el board, sino invisible
//var usuario,puntos,tiempo;

var nombreElem;
let arrayJugador = [];
console.log("El array es: ",arrayJugador);

function escribirScoreboard()
{
    //const rankElem = document.getElementById("rank");
    //puntosElem = document.getElementById(".puntuacion").value; // mover esto, solo activar cuando el jugador pierde, nuevo record
    // no es necesario lo de arriba jaja
    // al perder, extraer nombre y fecha de juego

    //console.log("array Vacio: ", arrayJugador);

    //arrayJugador.push({ nombre, puntos }); // ejemplo hacer otra funcion

    //arrayJugador.sort((a, b) => b.puntos - a.puntos); // ejemplo para acomodar por puntos 

    document.getElementById("inputNombre").value // nombre activo

return arrayJugador;
}

function anadirJugadores(acumuladorPuntaje)
{

 document.getElementById("inputNombre").addEventListener("input", e => {
 console.log(e.target.value);
 nombreElem = document.getElementById("inputNombre").value;
});

    rankingTabla = document.getElementById("rankings");
    puntosElem = acumuladorPuntaje;
    fechaActual = darFecha();
    arrayJugador.push({nombre: nombreElem,puntos: puntosElem,fecha: fechaActual});
    console.log("El array: ",arrayJugador);
    //const rankElem = document.getElementById("rank");
    arrayJugador.forEach((jugador,indice) => {
        const fila = document.createElement("div");
        fila.classList.add("tablafila");
        fila.innerHTML = `
          <div class="col-posicion">${indice + 1}</div>
          <div class="col-nombre">${jugador.nombre}</div>
          <div class="col-puntos">${jugador.puntos}</div>
          <div class="col-tiempo">${jugador.fecha}</div>
        `;
        rankingTabla.appendChild(fila);
        console.log("El array nuevo FINAL: ",arrayJugador);
    })
    
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