var contador = 0;

function cambiar() {

    if (contador == 2) {
        document.getElementById('contador2').innerHTML = "<button id='id1' class='btn btn1' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fyuliana.MP4?alt=media&token=68e220b6-3b12-4372-9f84-0e2f0cf9069d' data-name='Yuliana'></button>";
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
        document.getElementById('contador3').innerHTML = "<button id='id2' class='btn' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia'></button>";
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
        document.getElementById('contador4').innerHTML = "<button id='id3' class='btn' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fyuli.mp4?alt=media&token=0e7d18d2-6b63-4b17-80f9-80aae335d13d' data-name='Yuli Gonzales'></button>";
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
        document.getElementById('contador5').innerHTML = "<button id='id4' class='btn' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia' ></button>";
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
        document.getElementById('contador6').innerHTML = "<button id='id5' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia' ></button>";
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
        document.getElementById('contador7').innerHTML = "<button id='id6' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia' ></button>";
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
        document.getElementById('contador8').innerHTML = "<button id='id7' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia'></button>";
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
        document.getElementById('contador9').innerHTML = "<button id='id8' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia'></button>";
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
        document.getElementById('contador10').innerHTML = "<button id='id9' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia' ></button>";
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
        document.getElementById('contador11').innerHTML = "<button id='id10' class='btn ' data-toggle='modal' data-target='#exampleModal' data-whatever='https://firebasestorage.googleapis.com/v0/b/cursos-biblicos-v2.appspot.com/o/videos%2Fhannia.mp4?alt=media&token=98d750e7-0c5c-4490-9d80-ad1581c1d980' data-name='Hannia'></button>";
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