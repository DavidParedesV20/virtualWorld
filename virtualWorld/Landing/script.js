var inputName = document.getElementById('inputNameBox');
var inputPass = document.getElementById('inputPassBox');
var inputMailRegis =  document.getElementById('inputMailBox');
var btnRegis = document.getElementById('btnRegis');

var inputNameIni = document.getElementById('inputNameBoxIni');
var inputPassBoxIni = document.getElementById('inputPassBoxIni');
var btnIni = document.getElementById('btnIni');

var celeb = document.getElementById('celeb');

btnRegis.addEventListener('click', function() {
    var infomail = inputMailRegis.value;
    var infoName = inputName.value;
    var infoPass = inputPass.value;

    if(infomail.indexOf('@') === -1){
        alert('Ingresa un correo válido');
    } else if (infoName.trim() === ''){
        alert('Pon un nombre válido');
    } else if (infoName.indexOf(' ') !== -1) {
        alert('Sin espacios');
    } else if (infoPass.trim() === '') {
        alert('PIN inválido');
    } else {
        // Elimina la variable 'exito' y muestra la alerta directamente
        alert('Registro finalizado con éxito!');
        celeb.style.display = 'block';
        celeb.addEventListener('animationend', function() {
            celeb.style.display = 'none';
        }, {once: true});
    }
});

btnIni.addEventListener('click', function() {
    var infoNameIni = inputNameIni.value;
    var infoPassIni = inputPassBoxIni.value;

    if(infoNameIni.indexOf(' ') !== -1){
        alert('Sin espacios en tu nombre para iniciar sesión');
    } else if (infoNameIni.trim() === '') {
        alert('Ingresa tu nombre');
    } else if (infoPassIni.trim() === '') {
        alert('Ingresa tu contraseña')
    } else {
        alert('Bienvenid@');
    }
});
