$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Evitar el envío estándar del formulario

        // Realizar acciones adicionales si es necesario

        // Enviar el formulario utilizando AJAX
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(response) {
                alert(response); // Mostrar la respuesta del servidor
                // Puedes redirigir al usuario o realizar otras acciones según la respuesta
            }
        });
    });
});
