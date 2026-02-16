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
    //var cajaMensaje = document.getElementById("areaTexto")
    const expresiones =
    {
        nombresExpresion:/^(?=.{3,}$)[a-zA-Z]+/,
        emailExpresion:/^[^\s@]+@[^\s@]+\.[^\s@]+/,
        mensajeExpresion:/^(?=.{3,}$)[a-zA-Z]+/
    }
    switch (e.target.name)
    {
        case "NombreUsuario":
            if(expresiones.nombresExpresion.test(e.target.value))
            {
                nombres.style.color = "greenyellow";
                chequeoNombre = true;
            }else
            {
                nombres.style.color = "red";
                chequeoNombre = false;
            }
            break;

        case "EmailUsuario":
            if(expresiones.emailExpresion.test(e.target.value))
            {
                emails.style.color = "greenyellow";
                chequeoEmail = true;
            }else
            {
                emails.style.color = "red";
                chequeoEmail = false;
            }
            break;
        case "areaTexto":
            if(expresiones.mensajeExpresion.test(e.target.value))
            {
                //cajaMensaje.style.color = "greenyellow";
                chequeoCaja = true;
            }else
            {
                //cajaMensaje.style.color = "red";
                chequeoCaja = false;
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