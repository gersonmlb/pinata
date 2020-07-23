var contador = 0;

function cambiar() {

    if (contador == 2) {
        document.getElementById('contador2').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;

    } else if (contador == 4) {
        document.getElementById('contador3').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;

    } else if (contador == 6) {
        document.getElementById('contador4').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else if (contador == 8) {
        document.getElementById('contador5').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else if (contador == 10) {
        document.getElementById('contador6').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else if (contador == 12) {
        document.getElementById('contador7').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else if (contador == 14) {
        document.getElementById('contador8').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else if (contador == 16) {
        document.getElementById('contador9').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else if (contador == 18) {
        document.getElementById('contador10').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else if (contador == 20) {
        document.getElementById('contador11').innerHTML = "<button id='id" + contador + "' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'></button>";
        contador += 1;
    } else {
        contador += 1;

    }
}

function regalo() {

    var mensaje;
    var opcion = prompt("Introduzca su nombre:", "Aner Barrena");

    if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
    } else {
        mensaje = "Hola " + opcion;
    }
    document.getElementById("ejemplo").innerHTML = mensaje;
}