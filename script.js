let x;
let y;
let wSize;
let stepSize;
let speed;
let dir="right"
let prob;
let stop=false;
function pause(el){
  if(el.innerText=='play_arrow'){
    el.querySelector('span').innerHTML='pause';
  }
  else{
    el.querySelector('span').innerHTML='play_arrow';
  }
  if(stop){
  stop=false;
  }
  else{
    stop=true;
  }
  draw();
}
function getInputs(selectedDir) {
  wSize = parseInt(document.getElementById("walker-size").value);
  stepSize = parseInt(document.getElementById("step-size").value);
  speed = parseInt(document.getElementById("speed").value);
  if(selectedDir){
    dir=selectedDir;
  }
}
getInputs();

function setup() {
  let size = parseInt(
    window
      .getComputedStyle(document.querySelector("main"))
      .width.replace("px", "")
  );
  createCanvas(size-12, size-12);
  x = width / 2;
  y = width / 2;
  background(255);
}
function draw() {
  if(stop){
    noLoop()
  }
  else{
      loop()
    }
  frameRate(speed);
  stroke(0,100);
  strokeWeight(wSize);
  if(x>=width||y>=height||x<=0||y<=0){
    setup();
  }
  point(x, y);

  const step = random(1);
  switch (dir){

  case 'right':(function right() {
    if (step < 0.4) x = x + stepSize;
    else if (step < 0.6) y = y + stepSize;
    else if (step < 0.8) y = y - stepSize;
  })();
  break;
  case 'left':(function left() {
    if (step < 0.4) x = x - stepSize;
    else if (step < 0.6) y = y + stepSize;
    else if (step < 0.8) y = y - stepSize;
  })();
  break;
  case 'up':(function up() {
    if (step < 0.4) y = y - stepSize;
    else if (step < 0.6) x = x - stepSize;
    else if (step < 0.8) x = x + stepSize;
  })();
  break;
  case'down':(function down() {
    if (step < 0.4) y = y + stepSize;
    else if (step < 0.6) x = x - stepSize;
    else if (step < 0.8) x = x + stepSize;
  })();
  break;
}
}
