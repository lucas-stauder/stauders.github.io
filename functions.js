function wave(way,time){
    return Math.round(Amplitude*Math.sin((time/period)-(way/waveLength)));
  }
  function clamp(val, min, max) {   
      return Math.max(min, Math.min(max, val));
  }
  function AmplitudeChanged(){
    Amplitude = amplitudeInput.value();
  }
  function waveLengthChanged(){
    waveLength = waveLengthInput.value()/2;
  }
  function DeltaTChanged(){
    timeSteps = deltaT.value();
  }
  function resetButtonPressed(){
      time=0;
      for(i=0;i < osziLength;i++){
        oszilators[i]= 0;
      }
  }
function pauseButtonPressed(){
    pause = !pause;
}