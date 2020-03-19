var video = document.querySelector("#videoElement");
var info = document.getElementById("info");
var flip = false;

if (navigator.mediaDevices.getUserMedia) {
  var fm = {
    "#front": "user",
    "#back": "environment"
  };
  var constraints = {
    video: true,
    width: { min: 320, ideal: 1920 },
    height: { min: 180, ideal: 1080 },
    facingMode: fm[location.hash]
  };
  if (!constraints.facingMode) delete constraints.facingMode;
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!", err0r);
    });
}

video.addEventListener("click", function() {
  flip = !flip;
  video.style.transform = flip ? "scale(-1, 1)" : "";
});

video.addEventListener("loadeddata", function (e) {
  info.textContent = [video.videoWidth, video.videoHeight].join("x");
});
