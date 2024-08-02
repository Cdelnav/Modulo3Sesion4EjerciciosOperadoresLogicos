$(document).ready(function(){
    $("#formulario").submit(function(even){
        even.preventDefault();
        $("#msg-primerN, msg-segundoN").html("")

        var n1 = $("#txt-primer").val();
        var n2 = $("#txt-segundo").val();

        if(n1 == ""){
            return $("#msg-primerN").html("Ingresar primer numero")
        }
        if(n2 == ""){
            return $("#msg-segundoN").html("Ingresar segundo numero")
        }

        var mostrar
        if (n1 > 0 || n2 > 0) {
            mostrar = "si"
        } else {
            mostrar = "no"
        }

        var exito = (n1 > 0 || n2 > 0) ? "si" : "no"

        if (exito =="si") {
            $("#result").removeClass("alert-danger").addClass("alert-success")
            $("#result").html(`Proceso exitoso, los numero ingresados fueron ${n1} y ${n2}`)
        } else {
            $("#result").removeClass("alert-success").addClass("alert-danger")
            $("#result").html(`Proceso Fallido`)

        }



   })   
    
})



