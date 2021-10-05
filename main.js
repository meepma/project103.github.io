Webcam.set({
    width:400,
    height:400,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="meep" src="'+data_uri+'">';
})
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rzEGWGDqx/model.json",modelLoaded);
function modelLoaded(){
    console.log("model has been loaded");
}