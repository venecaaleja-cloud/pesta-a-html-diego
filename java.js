// 1. Seleccionamos los elementos del HTML
var botones = document.querySelectorAll('.tab-button');
var paneles = document.querySelectorAll('.tab-panel');
var indicador = document.getElementById('indicator');

// 2. Recorremos cada botón para asignarle un evento de clic
for (var i = 0; i < botones.length; i++) {
    
    botones[i].addEventListener('click', function() {
        
        // PASO A: Quitar la clase "active" de todos los botones y paneles
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove('active');
            paneles[j].classList.remove('active');
        }

        // PASO B: Agregar la clase "active" solo al botón que se clickeó
        this.classList.add('active');

        // PASO C: Mostrar el panel correspondiente
        // Leemos el atributo data-target del botón clickeado
        var idDelPanel = this.getAttribute('data-target');
        document.getElementById(idDelPanel).classList.add('active');

        // PASO D: Mover la línea indicadora
        // Leemos la posición (0, 1, 2 o 3) del botón clickeado
        var posicion = this.getAttribute('data-index');
        
        // Movemos la línea multiplicando la posición por 100%
        indicador.style.transform = 'translateX(' + (posicion * 100) + '%)';
    });
}