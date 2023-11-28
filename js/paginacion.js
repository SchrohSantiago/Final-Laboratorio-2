$(document).ready(function() {
    var cardContainer = $('#card-container');

    // Inicializar la paginación
    $('#pagination').pagination({
        dataSource: function(done) {
            // Obtener datos del servidor usando AJAX
            $.ajax({
                url: './php/paisajes.php', // Reemplaza con la ruta correcta
                dataType: 'json',
                success: function(response) {
                    done(response); // Pasar los datos al componente de paginación
                },
                error: function(error) {
                    console.error('Error al obtener datos del servidor:', error);
                }
            });
        },
        pageSize: 6,
        callback: function(data) {
            cardContainer.html('');
            var subContainer = $('<div class="sub-container-card"></div>');
            cardContainer.append(subContainer);

            data.forEach(function(item, index) {
                var card = $(`
                    <div class="card">
                        <figure class="figure">
                            <img src="${item.ruta_imagen}" alt="Imagen" class="img-card">
                            <figcaption>${item.nombre}</figcaption>
                        </figure>
                        <p class="desc-card">${item.descripcion}</p>
                        <p class="price-card">Precio: $${item.precio}</p>
                    </div>
                `);

                subContainer.append(card);

                // Crea un nuevo subcontenedor cada tres tarjetas
            });
        }
    });
});
