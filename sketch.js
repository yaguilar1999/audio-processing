var song;
var button;
var volumeSlider, rateSlider, panSlider;

function preload(){
    song = loadSound("sound/destinyschild-saymyname.mp3")
}

function setup(){
    createCanvas(600,400);
    background(18, 39, 195);
    
    button = createButton("Play")
    button.mousePressed(togglePlaying);
    button.position(20,100);
    
    //volume is increasing or decrasing volume
    volumeSlider = createSlider(0, 1, 0.5, .05);
    volumeSlider.position(20, 150);
    
    rateSlider = createSlider(0.5, 1.5, 1, .05);
    rateSlider.position(20, 160);
    
}

function draw(){
    song.setVolume(volumeSlider.value());
    song.rate(rateSlider());
}

function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("Play");
    }
    else{
        song.play();
        button.html("Pause");
    }
}