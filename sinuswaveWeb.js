

function setup() {
  cnv = createCanvas(1024,900);
  init();
  frameRate(60);
  background(1);
  osziNull(firstWave);
  osziNull(secondWave);
}


function draw() {
  background(255);
  var i;
  for(i=0;i<osziLength;i++){
      if((i)/vPhase<time){
        firstWave.oszilators[i]= wave(i,time,firstWave);
      }else{
        firstWave.oszilators[i]= 0;
      }
    
  }
  for(i=0;i<osziLength;i++){
    if((i)/vPhase<time){
      secondWave.oszilators[i]= wave(i,time,secondWave);
    }else{
      secondWave.oszilators[i]= 0;
    }
  
  }
  for(i=0;i<osziLength;i++){
    sumWave.oszilators[i]= secondWave.oszilators[i]+firstWave.oszilators[i];
  }
  fill(250, 0, 0);
  var i;
  for(i = 1; i < osziLength+1; i++){
      ellipse((i-1) + xOffset*(i-1), firstWave.oszilators[i-1]+firstWave.yOffset,5,5);
      ellipse((i-1) + xOffset*(i-1), secondWave.oszilators[i-1]+secondWave.yOffset,5,5);
      ellipse((i-1) + xOffset*(i-1), sumWave.oszilators[i-1]+sumWave.yOffset,5,5);
  }
  displayTime.html("Zeit :"+time.toFixed(2));
  if(!pause){
    time+=timeSteps;
  }
  
}

