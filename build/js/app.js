document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {

    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `assets/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen Galeria`;
        
        galeria.appendChild(imagen)
    }
}