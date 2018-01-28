var mouseX;
var mouseY;
var circleX = 300;
var circleY = 300;
var col = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
};
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {  
    circleX =  random(0, width);
    circleY = random(0, height);
    ellipse(mouseX, mouseY, 20, 20);
    col.r =  map(mouseY-mouseX, 0, width, 200, 255);
    col.g =  map(mouseX-mouseY, 0, height, 20, 255);
    col.b =  map(mouseY*2, 0, width, 100, 150);
    fill(col.r, col.g, col.b, 150);
    stroke(60,40,200,0);
}
