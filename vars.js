var osziLength =100,osziLengthButton,osziLengthInput;
var oszilators = [osziLength];
var oszilatorsBool = [osziLength];
var Amplitude=60;
var time=0,period,waveLength=3,vPhase=3;
var amplitudeInput,amplitudeButton;
var waveLengthInput, waveLengthButton;
var vPhaseInput, vPhaseButton;
var cnv,timeSteps=0.02;
var yOffset,xOffset;
var deltaT;
var displayTime;
var pause=false,pauseButton;
var resetButton;
var firstWave,secondWave;

function WaveControl() {
    this.waveLengthInput; 
    this.waveLengthButton;
  }

function init(){
    firstWave = new WaveControl();
    secondWave = new WaveControl();
    amplitudeInput = select("#Amplitude");
    amplitudeButton = select("#AmplitudeButton");
    firstWave.waveLengthInput = select("#waveLength");
    firstWave.waveLengthButton = select("#waveLengthButton");
    firstWave.waveLengthButton.mousePressed(waveLengthChanged);
    amplitudeInput.value(Amplitude);
    firstWave.waveLengthInput.value(waveLength);
    pauseButton = select("#pauseButton");
    pauseButton.mousePressed(pauseButtonPressed);
    deltaT = select("#deltaT");
    deltaT.changed(DeltaTChanged);
    cnv.center("horizontal");
    amplitudeButton.mousePressed(AmplitudeChanged);
    displayTime = select("#displayTime");
    resetButton = select("#resetButton");
    resetButton.mousePressed(resetButtonPressed);
    osziLengthButton = select("#osziLengthButton");
    osziLengthInput = select("#osziLength");
    osziLengthInput.value(osziLength);
    osziLengthButton.mousePressed(osziLengthChanged);
    vPhaseButton= select("#vPhaseButton");
    vPhaseInput = select("#vPhase");
    vPhaseInput.value(vPhase);
    vPhaseButton.mousePressed(vPhaseChanged);
    xOffset = width/osziLength;
}