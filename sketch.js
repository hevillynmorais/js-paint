function setup() {
  createCanvas(600, 600);
   background("black");
}

function draw() {
 
  stroke("water green")
  fill("white")
 
  // console.log(mouseIsPressed);
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }

} 