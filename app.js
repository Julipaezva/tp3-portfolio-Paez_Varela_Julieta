function App() {
  this.processingButton = function (event) {
    const btn = event.currentTarget;
    const carrusel = btn.closest('.carrusel');
    const track = carrusel.querySelector('#track');
    const slide = track.querySelector('.slide');
    const slideWidth = slide.offsetWidth + 20; 
    const visibleWidth = carrusel.querySelector('.carrusel-container').offsetWidth;
    const trackWidth = track.scrollWidth;

    
    let currentLeft = track.style.left === "" ? 0 : parseFloat(track.style.left.replace("px", "")) * -1;

    
    if (btn.dataset.button === "button-prev" && currentLeft > 0) {
      let newLeft = Math.max(currentLeft - slideWidth, 0);
      track.style.left = `${-1 * newLeft}px`;
    }

    
    if (btn.dataset.button === "button-next" && (currentLeft + visibleWidth) < trackWidth) {
      let newLeft = currentLeft + slideWidth;
      track.style.left = `${-1 * newLeft}px`;
    }
  };
}

window.onload = () => {
  window.app = new App();
};


function cambiarDisplay(idGaleria, visibilidadNueva) {
  document.getElementById(idGaleria).style.display = visibilidadNueva;
}

function mostrarGaleria(tipo) {
  cambiarDisplay("galeria-" + tipo, "flex");
}

function ocultarGaleria(tipo) {
  cambiarDisplay("galeria-" + tipo, "none");
}