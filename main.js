Webcam.set({
    width: 382,
    height: 284,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("webcamImage");
Webcam.attach("#webcamImage");
console.log("ML5 Version: " + ml5.version);

function captureImage() {
    Webcam.snap(function(dataURI) {
        document.getElementById("capturedImage").innerHTML = "<img id='snapshot' src='" + dataURI + "'>";
    });
};

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Btmb6AuXe/model.json', modelLoaded);