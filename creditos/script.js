"use strict"
const formulario = document.getElementById("formComentario");
const inputs = document.querySelectorAll("#formComentario input");
const cajaTexto = document.querySelectorAll("#formComentario textarea");

var chequeoNombre = new Boolean(false);
var chequeoEmail = new Boolean(false);
var chequeoCaja = new Boolean(false);

function validacionForm(e)
{
    console.log("Validacion check");
    var nombres = document.getElementById("labelNombre");
    var emails = document.getElementById("labelEmail");
    var nombreAdvertencia = document.getElementById("labelAdvertenciaNombre");
    var emailAdvertencia = document.getElementById("labelAdvertenciaEmail");
    var cajaMensaje = document.getElementById("areaTexto");
    var cajaMensajeAdvertencia = document.getElementById("areaTextoAdvertencia");
    const expresiones =
    {
        nombresExpresion:/^(?=.{3,}$)[a-zA-Z]+/,
        emailExpresion:/^[^\s@]+@[^\s@]+\.[^\s@]+/,
        mensajeExpresion:/^(?=.{5,}$)[a-zA-Z\s]+$/
    }
    switch (e.target.name)
    {
        case "NombreUsuario":
            if(expresiones.nombresExpresion.test(e.target.value))
            {
                nombres.style.color = "greenyellow";
                nombreAdvertencia.style.opacity = 0;
                chequeoNombre = true;

            }else
            {
                nombres.style.color = "red";
                nombreAdvertencia.style.opacity = 1;
                nombreAdvertencia.style.color ="red";
                chequeoNombre = false;
            }
            break;

        case "EmailUsuario":
            if(expresiones.emailExpresion.test(e.target.value))
            {
                emails.style.color = "greenyellow";
                emailAdvertencia.style.opacity = 0;
                chequeoEmail = true;
            }else
            {
                emails.style.color = "red";
                emailAdvertencia.style.color = "red";
                emailAdvertencia.style.opacity = 1;
                chequeoEmail = false;
            }
            break;
        case "areaTexto":
            if(expresiones.mensajeExpresion.test(e.target.value))
            {
                cajaMensajeAdvertencia.style.color = "greenyellow";
                chequeoCaja = true;
                cajaMensajeAdvertencia.style.opacity = 0;
            }else
            {
                cajaMensajeAdvertencia.style.color = "red";
                chequeoCaja = false;
                cajaMensajeAdvertencia.style.opacity = 1;
            }
            break;
    }  
}

function enviarMensaje()
 {
     const expresionesVerificacion =
     {
         nombresExpresion: /^(?=.{3,}$)[a-zA-Z]+/,
         mailExpresion: /^[^\s@]+@[^\s@]+\.[^\s@]+/,
         mensajeExpresion: /^(?=.{5,}$)[a-zA-Z]+/
     }
     if(expresionesVerificacion.nombresExpresion.test(target.value) && expresionesVerificacion.emailExpresion.test(target.value) && expresionesVerificacion.mensajeExpresion.test(target.value))
     {
        console.log("comprobado");
     }
 }

inputs.forEach((input) => {
    input.addEventListener('keyup',validacionForm);
    input.addEventListener('blur',validacionForm);
});

cajaTexto.forEach((textarea) =>
{
    textarea.addEventListener('keyup',validacionForm);
    textarea.addEventListener('blur',validacionForm);
});

formulario.addEventListener('submit',(e) => {
    console.log("Estado: ",chequeoNombre,chequeoEmail,chequeoCaja);
    
    if(chequeoNombre && chequeoEmail && chequeoCaja === true)
    {
        console.log("SIUM");
    }else{
        e.preventDefault();
    }
});
