function pulsacion() {
    var nombre=document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var sex = document.getElementById("sexo").value;
    var puls;
    var texto;

    if (nombre==="") 
        texto="Introduzca su nombre :(";
        
    else if (edad==="") 
    texto="Introduzca su edad :(";    
    
    else if (sex === "Masculino") {
        puls = 220 - parseInt(edad);
        puls /= 10;
        texto="Por cada 10 segundos de ejercicio aerobico usted debe tener " + puls + " pulsaciones";
    } else {
        puls = 210 - parseInt(edad);
        puls /= 10;
        texto="Por cada 10 segundos de ejercicio aerobico usted debe tener " + puls + " pulsaciones";
    }
    window.alert(texto);
}