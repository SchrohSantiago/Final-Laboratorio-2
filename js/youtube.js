
var apiKey = 'AIzaSyBQc8A6wSLLibHRAXU5B-VNu8UlmZHbLio';

var videoIds = ['7Xgx2QX2g-s', '9f8g5NFHudI', 'oSexfR0Ubzw'];

var players = [];

function onPlayerError(event) {
  console.error('Error en el reproductor:', event.data);
}

function createYouTubePlayer(containerId, videoId) {
  try {
  return new YT.Player(containerId, {
  
    videoId: videoId,
    playerVars: {
      'key': apiKey,
      'autoplay': 1,
      'controls': 0,  // Establecido en 0 para ocultar los controles del reproductor  // Establecido en 1 para deshabilitar el panel de herramientas del teclado
      'mute': 1, //Configurado a 1 para ocultar el botón de YouTube
    },
    events: {
      'onReady': function(event) {
        // Ajustar el tamaño del reproductor para ocupar el 100% del espacio disponible
        event.target.setSize('100%', '100%');
        onPlayerReady(event);
      },
      'onStateChange': onPlayerStateChange,
    },
  });
  
} catch (error){
  console.error('Error al crear reproductor');
}
}

function onPlayerReady(event) {}

function onPlayerStateChange(event) {}

function initPlayers() {
  for (var i = 0; i < videoIds.length; i++) {
    var containerId = 'player' + (i + 1);
    var player = createYouTubePlayer(containerId, videoIds[i]);
    players.push(player);
  }
}
$(document).ready(function() {
  // Video 1 - San Martin
  createYouTubePlayer('player1', '7Xgx2QX2g-s');

  // Video 2 - Tokyo
  createYouTubePlayer('player2', '9f8g5NFHudI');

  // Video 3 - Roma
  createYouTubePlayer('player3', 'oSexfR0Ubzw');
});

function onYouTubeIframeAPIReady() {
  initPlayers();
}
