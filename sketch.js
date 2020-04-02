var r = 0;
var g = 200;
var b=1020;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var pointer;
function setup(){

  createCanvas(1020,400);

}


function draw(){
// Remember to fill the canvas with white paint before creating the ellipse.
 r = mouseY;
 g = mouseX/2;
 b = mouseX/4;

background(r,g,b);



   // change the value of Red based on the mouse movement about the X axis
 
   // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.

  ellipse(mouseX,mouseY,30);

  drawSprites();
   
}