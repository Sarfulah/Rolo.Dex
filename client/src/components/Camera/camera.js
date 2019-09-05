window.onload = function () {

  // Normalize the various vendor prefixed versions of getUserMedia.
  navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

  // Check that the browser supports getUserMedia.
  // If it doesn't show an alert, otherwise continue.
  if (navigator.getUserMedia) {
    console.log(navigator.getUserMedia)
    
var video = document.getElementById('camera-stream');
    // Request the camera.
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });

  } else {
    alert('Sorry, your browser does not support getUserMedia');
  }

}