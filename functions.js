function wave(way,time,wave){
    return wave.Amplitude*Math.sin((time/period(wave))-(way/wave.waveLength));
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