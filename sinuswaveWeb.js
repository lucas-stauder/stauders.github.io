

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
  for(i=0;i < clamp(Math.round(period*waveLength*time),0,osziLength);i++){
    oszilators[i]= wave(i,time);
  }
  fill(250, 0, 0);
  var i;
  for(i = 1; i < osziLength+1; i++){
      console.log(width/(3+osziLength)*i);
      ellipse(i + width/(3+osziLength)*i, oszilators[i-1]+yOffset,5,5);
  }
  displayTime.html("Zeit :"+time.toFixed(2));
  if(!pause){
    time+=timeSteps;
  }
  
}

