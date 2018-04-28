

function setup() {
  cnv = createCanvas(1024,600);
  yOffset = height/3;
  init();
  frameRate(60);
  background(1);
  var i;
  osziNull();
}


function draw() {
  background(255);
  var i;
  for(i=0;i<osziLength;i++){
      if((i)/vPhase<time){
        oszilators[i]= wave(i,time);
      }else{
        oszilators[i]= 0;
      }
    
  }
  fill(250, 0, 0);
  var i;
  for(i = 1; i < osziLength+1; i++){
      ellipse((i-1) + xOffset*(i-1), oszilators[i-1]+yOffset,5,5);
  }
  displayTime.html("Zeit :"+time.toFixed(2));
  if(!pause){
    time+=timeSteps;
  }
  
}

