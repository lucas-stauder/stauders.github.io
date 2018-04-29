function wave(way,time){
    return firstWave.Amplitude*Math.sin((time/period())-(way/waveLength));
  }
  function clamp(val, min, max) {   
      return Math.max(min, Math.min(max, val));
  }
  function AmplitudeChanged(){
    if(firstWave.amplitudeInput.value()>100){
      firstWave.amplitudeInput.value(100);
    }
    firstWave.Amplitude = firstWave.amplitudeInput.value();
  }
  function waveLengthChanged(){
    waveLength = firstWave.waveLengthInput.value();
  }
  function osziLengthChanged(){
    osziLength = osziLengthInput.value();
    oszilators = [osziLength];
    xOffset =width/osziLength;
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
    oszilatorsBool[i]=0;
  }
}
function vPhaseChanged(){
  vPhase = vPhaseInput.value();
}
function period(){
  return waveLength/vPhase;
}