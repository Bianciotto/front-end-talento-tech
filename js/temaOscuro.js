document.addEventListener('DOMContentLoaded', function () {
    var botonTema = document.getElementById('botonTema');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');

    // Colores originales
    var headerOriginalColor = 'rgb(143, 155, 177)';
    var footerOriginalColor = 'rgb(200, 200, 200)';

    // Colores nuevos
    var nuevoColor = 'rgb(85, 107, 47)';

    botonTema.addEventListener('click', function () {
        // Verifica el color actual del header
        if (header.style.backgroundColor === nuevoColor) {
            // Si el color es el nuevo, regresa al original
            header.style.backgroundColor = headerOriginalColor;
            footer.style.backgroundColor = footerOriginalColor;
        } else {
            // Si el color es el original, cambia al nuevo
            header.style.backgroundColor = nuevoColor;
            footer.style.backgroundColor = nuevoColor;
        }
    });
});

