function wave(way,time){
    return Math.round(Amplitude*Math.sin((time/period)-(way/waveLength)));
  }
  function clamp(val, min, max) {   
      return Math.max(min, Math.min(max, val));
  }
  function AmplitudeChanged(){
    if(amplitudeInput.value()>100){
      amplitudeInput.value(100);
    }
    Amplitude = amplitudeInput.value();
  }
  function waveLengthChanged(){
    waveLength = waveLengthInput.value()/2;
  }
  function osziLengthChanged(){
    osziLength = osziLengthInput.value();
    oszilators = [osziLength];
    osziNull();
  }
  function DeltaTChanged(){
    timeSteps = deltaT.value();
  }
  function resetButtonPressed(){
      time=0;
      osziNull();
  }
function pauseButtonPressed(){
    pause = !pause;
}
function osziNull(){
  for(i=0;i < osziLength;i++){
    oszilators[i]= 0;
  }
}