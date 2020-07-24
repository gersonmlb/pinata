var contador = 0;

function cambiar() {

    if (contador == 2) {
        document.getElementById('contador8').innerHTML = "<button id='id7' onclick='sonido.pause()' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2FAlejandra.mp4?alt=media&token=6ba6307e-b485-42b5-9d88-421726938e2e' data-name='Alejandra'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;


    } else if (contador == 4) {
        document.getElementById('contador3').innerHTML = "<button id='id2' onclick='sonido.pause()' class='btn' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 6) {
        document.getElementById('contador4').innerHTML = "<button id='id3' onclick='sonido.pause()' class='btn' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fyuli.mp4?alt=media&token=0e7d18d2-6b63-4b17-80f9-80aae335d13d' data-name='Yuli Gonzales'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 8) {
        document.getElementById('contador5').innerHTML = "<button id='id4' onclick='sonido.pause()' class='btn' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fjuan.mp4?alt=media&token=2d23e49f-d798-460f-9643-8aea300f7d1b' data-name='Juan' ></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 10) {
        document.getElementById('contador6').innerHTML = "<button id='id5' onclick='sonido.pause()' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fmelky.mp4?alt=media&token=b13dd129-36ec-4b4c-b5a3-c05d38ac611c' data-name='Melky' ></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 12) {
        document.getElementById('contador7').innerHTML = "<button id='id6' onclick='sonido.pause()' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fyainny.mp4?alt=media&token=a1bc215d-86bf-40dd-b5ed-4f3fc3560ad6' data-name='Yainny' ></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 14) {
        document.getElementById('contador2').innerHTML = "<button id='id1' onclick='sonido.pause()' class='btn btn1' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fyuliana.MP4?alt=media&token=68e220b6-3b12-4372-9f84-0e2f0cf9069d' data-name='Yuliana'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 16) {
        document.getElementById('contador9').innerHTML = "<button id='id8' onclick='sonido.pause()' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fwinnie.mp4?alt=media&token=dc6ca052-c8ac-49d7-9a37-43048b36994d' data-name='Winnie'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 18) {
        document.getElementById('contador10').innerHTML = "<button id='id9' onclick='sonido.pause()' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia' ></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else if (contador == 20) {
        document.getElementById('contador11').innerHTML = "<button id='id10' onclick='sonido.pause()' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia'></button>";
        $('#exampleModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var recipient = button.data('whatever')
            var name = button.data('name')

            var modal = $(this)
            modal.find('.modal-title').text('Regalo de ' + name)
            modal.find('.modal-body iframe').attr('src', recipient)
        })
        contador += 1;

    } else {
        contador += 1;

    }
}

function accionPlay() {
    var reproducir = new Audio();
    reproducir.src = "music/sonido.mp3";
    reproducir.play();
}

function iniciar() {
    button = document.querySelectorAll("button");
    button[0].addEventListener("click", accionPlay, false);
}
window.addEventListener("load", iniciar, false);

$(document).ready(function() {
    var sonido = document.getElementById("sonido");
    $('#myModal').modal('toggle');
});