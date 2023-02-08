function validation(){

    var nombrecompleto = document.getElementById('nombrecompleto').value;
    var correo = document.getElementById('correo').value;
    var numero = document.getElementById('numero').value;
    var ciudad = document.getElementById('ciudad').value;
    var mensaje = document.getElementById('mensaje').value;
    var error = document.getElementById('error');
    var text;

    if(nombrecompleto.lenght < 5){
        text = "Funciona";
        error.innerHTML = text;
        return false;
    }
    alert("Enviado")
    return true


}
