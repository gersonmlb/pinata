var contador = 0;
var fin_contador = 2; // Tiempo en en el que deseas que redireccione la funcion.
var iniciado = false;

function cuenta() {
    if (contador >= fin_contador) {
        window.location.href = "cumple.html";
    } else {
        fin_contador = fin_contador - 1;
    }
}

function ini() {
    cuenta();
    setInterval("cuenta()", 1000);
}