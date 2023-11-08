function showCubiculoInfo(element) {
    var cubiculoInfo = element.querySelector('.cubiculo-info');
    cubiculoInfo.style.display = 'block';

    // Añadir una función para cambiar imágenes cada 3 segundos
    var imageContainer = cubiculoInfo.querySelector('.image-container');
    var images = imageContainer.querySelectorAll('.info-imagen');
    var currentImageIndex = 0;

    function changeImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }

    changeImage(); // Mostrar la primera imagen

    var imageChangeInterval = setInterval(changeImage, 3000);

    cubiculoInfo.dataset.imageChangeInterval = imageChangeInterval; // Almacenar el intervalo para detenerlo en el mouseout
}

function hideCubiculoInfo(element) {
    var cubiculoInfo = element.querySelector('.cubiculo-info');
    cubiculoInfo.style.display = 'none';

    // Detener el intervalo de cambio de imágenes al salir del "pop-up"
    var imageChangeInterval = cubiculoInfo.dataset.imageChangeInterval;
    clearInterval(imageChangeInterval);
}
// Esta variable rastreará el índice de la imagen actual
// Esta variable rastreará el índice de la imagen actual
var currentImageIndex = 0;

function changeImage(image) {
    // Obtén todas las imágenes "patata"
    var images = document.querySelectorAll('.patata');

    // Oculta la imagen actual
    images[currentImageIndex].style.display = 'none';

    // Incrementa el índice o reinícialo si alcanza el último índice
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Muestra la nueva imagen
    images[currentImageIndex].style.display = 'block';
}
