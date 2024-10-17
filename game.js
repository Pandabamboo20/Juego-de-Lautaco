// Definir variables
let currentCamera = 1;
const totalCameras = 3; // Cantidad de cámaras
let enemyPosition = Math.floor(Math.random() * totalCameras) + 1;
let lightOn = false;

// Elementos del DOM
const cameraDisplay = document.getElementById('current-camera');
const enemyAlert = document.getElementById('enemy-alert');
const message = document.getElementById('message');

// Función para cambiar la cámara
function changeCamera(direction) {
    if (direction === 'left') {
        currentCamera = currentCamera === 1 ? totalCameras : currentCamera - 1;
    } else {
        currentCamera = currentCamera === totalCameras ? 1 : currentCamera + 1;
    }
    cameraDisplay.textContent = currentCamera;
    checkForEnemy();
}

// Función para encender o apagar la luz
function toggleLight() {
    lightOn = !lightOn;
    if (lightOn) {
        message.textContent = 'Luz encendida, estás a salvo... por ahora.';
    } else {
        message.textContent = 'Luz apagada. ¡Ten cuidado!';
    }
    checkForEnemy();
}

// Función para verificar si hay un enemigo en la cámara actual
function checkForEnemy() {
    if (currentCamera === enemyPosition && !lightOn) {
        enemyAlert.textContent = '¡Lautaco está en la cámara!';
        enemyAlert.style.display = 'block';
        setTimeout(() => {
            message.textContent = '¡Te atraparon!';
        }, 2000);
    } else {
        enemyAlert.style.display = 'none';
    }
}

// Evento para cambiar de cámara
document.getElementById('camera-left').addEventListener('click', () => {
    changeCamera('left');
});

document.getElementById('camera-right').addEventListener('click', () => {
    changeCamera('right');
});

// Evento para encender/apagar la luz
document.getElementById('toggle-light').addEventListener('click', toggleLight);

// Inicialización
cameraDisplay.textContent = currentCamera;
message.textContent = 'Sobrevive las noches sin que Lautaco te atrape.';