

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
  let z=0;
  
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
  
  var i,debung;
  for(i = 1; i < osziLength+1; i++){
      fill(250, 0, 0);
      ellipse((i-1) + xOffset*(i-1), firstWave.oszilators[i-1]+firstWave.yOffset,5,5);
      fill(0, 0, 250);
      debung=secondWave.oszilators[5];
      ellipse((i-1) + xOffset*(i-1), secondWave.oszilators[i-1]+secondWave.yOffset,5,5);
      fill(250,0,250);
      ellipse((i-1) + xOffset*(i-1), sumWave.oszilators[i-1]+sumWave.yOffset,5,5);
  }
  fill(0);
  line(0, firstWave.yOffset, width, firstWave.yOffset);
  line(0, secondWave.yOffset, width, secondWave.yOffset);
  line(0, sumWave.yOffset, width, sumWave.yOffset);
  displayTime.html("Zeit :"+time.toFixed(2));
  if(!pause){
    time+=timeSteps;
    console.log(secondWave.phaseOffset);
  }
  
}

