img = "";
status="";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function preload(){
img = loadImage('tv and ac.jpg');
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Tv", 290, 190);
    noFill();
    stroke("#FF0000");
    rect(270, 160, 140, 150);

    fill("#FF0000"); 
    text("AC", 250, 70);
    noFill();
    stroke("#FF0000");
    rect(240, 50, 200, 90);
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult); 
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
