function wave(way,time,wave){
    return wave.Amplitude*Math.sin((time/period(wave))-(way/wave.waveLength)-Math.radians(wave.phaseOffset));
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
    firstWave.waveLength = firstWave.waveLengthInput.value();
  }
  function secondAmplitudeChanged(){
    if(secondWave.amplitudeInput.value()>100){
      secondWave.amplitudeInput.value(100);
    }
    secondWave.Amplitude = secondWave.amplitudeInput.value();
  }
  function secondWaveLengthChanged(){
    secondWave.waveLength = secondWave.waveLengthInput.value();
  }
  function osziLengthChanged(){
    osziLength = osziLengthInput.value();
    oszilators = [osziLength];
    xOffset =width/osziLength;
    osziNull(firstWave);
  }
  function DeltaTChanged(){
    timeSteps = deltaT.value();
  }
  function resetButtonPressed(){
      time=0;
      osziNull(firstWave);
  }
function pauseButtonPressed(){
    pause = !pause;
    if(pause){
      pauseButton.html("Resume");
    }else{
      pauseButton.html("Pause");
    }
}
function osziNull(wave){
  var i;
  for(i=0;i < osziLength;i++){
    wave.oszilators[i]= 0;
  }
}
function vPhaseChanged(){
  vPhase = vPhaseInput.value();
}
function period(wave){
  return wave.waveLength/vPhase;
}
function phaseOffsetChanged(){
  secondWave.phaseOffset = secondWave.phaseOffsetInput.value();
}
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};