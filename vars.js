var osziLength =100,osziLengthButton,osziLengthInput;
var oszilators = [osziLength];
var Amplitude=60;
var time=0,period=1,waveLength=3;
var amplitudeInput,amplitudeButton;
var  waveLengthInput, waveLengthButton;
var cnv,timeSteps=0.02;
var yOffset;
var deltaT;
var displayTime;
var pause=false,pauseButton;
var resetButton;

function init(){
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
    osziLengthButton = select("#osziLengthButton");
    osziLengthInput = select("#osziLength");
    osziLengthInput.value(osziLength);
    osziLengthButton.mousePressed(osziLengthChanged);
}