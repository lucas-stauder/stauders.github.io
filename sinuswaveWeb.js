

function setup() {
  cnv = createCanvas(640,480);
  amplitudeInput = select("#Amplitude");
  amplitudeButton = select("#AmplitudeButton");
  waveLengthInput = select("#waveLength");
  amplitudeInput.value(Amplitude);
  waveLengthInput.value(waveLength*2);
  pauseButton = select("#pauseButton");
  pauseButton.mousePressed(pauseButtonPressed);
  waveLengthButton = select("#waveLengthButton");
  deltaT = select("#deltaT");
  deltaT.changed(DeltaTChanged);
  cnv.center("horizontal");
  amplitudeButton.mousePressed(AmplitudeChanged);
  waveLengthButton.mousePressed(waveLengthChanged);
  displayTime = select("#displayTime");
  resetButton = select("#resetButton");
  resetButton.mousePressed(resetButtonPressed);
  frameRate(60);
  background(1);
  var i;
  for(i=0;i < osziLength;i++){
    oszilators[i]= 0;
  }
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
      ellipse(i + width/(3+osziLength)*i, oszilators[i-1]+height/2,5,5);
  }
  displayTime.html("Zeit :"+time.toFixed(2));
  if(!pause){
    time+=timeSteps;
  }
  
}

