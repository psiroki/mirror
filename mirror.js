var video = document.querySelector("#videoElement");
var flip = false;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
    video: true,
    width: { min: 320, ideal: 1920 },
    height: { min: 180, ideal: 1080 } })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
}

video.addEventListener("click", function() {
  flip = !flip;
  video.style.transform = flip ? "scale(-1, 1)" : "";
});
