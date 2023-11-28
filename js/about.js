$(document).ready(function() {
    // Manejar clic en el elemento "About Us"
    $(".home-li").on("click", function() {
        // Obtener la posición de la sección "About Us"
        var aboutUsSection = $(".about");
        var aboutUsPosition = aboutUsSection.offset().top;

        // Desplazar la página hasta la posición de la sección "About Us"
        $("html, body").animate({
            scrollTop: aboutUsPosition
        }, 1000); // Puedes ajustar la duración del desplazamiento según tus preferencias
    });
});