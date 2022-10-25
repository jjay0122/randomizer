//pick your poison that will give supernatural abilities
let poison = [{
  name:"Dragon Blood", 
  color: "blood color"
}, {
  name:"Unicorn Horns", 
  color: "rose color"
}, {
  name:"Angel Feathers", 
  color: "paper color"
}, {
  name:"Demon Scars", 
  color: "sun color"
}, {
  name:"Fairy Magic", 
  color:"sky color"
}, {
  name:"Rainbow Gold", 
  color:"golden color"
}];

let randomIndex;

function setup() {
  createCanvas(500, 500);
  background(220);
   
}

function draw() {

}

function mousePressed() {
  background(random(320));
  randomIndex=int(random(poison.length));
  text(poison[randomIndex].name, 215, 200);
  poison.splice(randomIndex, 1);
  
}