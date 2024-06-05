import React, { useEffect } from 'react'


function Mountain() {
    useEffect(()=>{
        // settings adjustable by gui
var settings = {
    text:"CANVAS TIME!",
    waviness:3,
    spacing:5,
    speed:16,
    trail:4,
    multiply_trail:false
};

var viewWidth = 1024;
var viewHeight = 512;
var drawingCanvas, ctx;
var timeStep = (1/16);
var time = 0;
var frame = 0;

var measureDiv = document.getElementById('text-measure');
var totalTextWidth = 0;
var letters = [];

var bgColor1 =          '#FFF0A5',
    bgColor2 =          '#FFB03B',
    letterFillColor1 =  '#B64926',
    letterFillColor2 =  '#8E2800',
    letterStrokeColor = '#DE0017';

var textFillPattern = createPattern(bgColor1, bgColor2);
var backgroundFillPattern = createPattern(letterFillColor1, letterFillColor2);

var Letter = function(v) {
    measureDiv.innerHTML = v;

    this.width = measureDiv.clientWidth;
    this.height = measureDiv.clientHeight;
    this.value = v;
    this.x = 0;
    this.y = 0;

    var history = [];

    this.draw = function() {
        if (settings.multiply_trail) {
            ctx.globalCompositeOperation = 'multiply';
        }

        for (var i = 0; i < history.length; i++) {
            ctx.strokeText(this.value, history[i].x, history[i].y);
        }

        ctx.strokeText(this.value, this.x, this.y);
        ctx.globalCompositeOperation = 'source-over'; // this is the default
        ctx.fillText(this.value, this.x, this.y);

        history.unshift({x:this.x, y:this.y});
        if (history.length > settings.trail) history.length = settings.trail;
    }
}

initGui();
initDrawingCanvas();
processText();

requestAnimationFrame(loop);

function initGui() {
    var gui = new dat.GUI();

    gui.add(settings, 'text').onChange(processText);
    gui.add(settings, 'speed', 1, 60).onChange(function() {timeStep = 1 / (61 - settings.speed)});
    gui.add(settings, 'spacing', 0, 10);
    gui.add(settings, 'waviness', 1, 16);
    gui.add(settings, 'trail', 1, 32).step(1);
    gui.add(settings, 'multiply_trail');
    gui.close();
}

function initDrawingCanvas() {
    drawingCanvas = document.getElementById("drawing_canvas");
    drawingCanvas.width = viewWidth;
    drawingCanvas.height = viewHeight;
    ctx = drawingCanvas.getContext('2d');

    ctx.font = 'bolder 120px Arial';
    ctx.lineJoin = 'round';
}

function processText() {
    letters.length = 0;
    totalTextWidth = 0;

    for (var i = 0; i < settings.text.length; i++) {
        letters.push(new Letter(settings.text[i]));
        totalTextWidth += letters[i].width;
    }
}

function createPattern(c1, c2) {
    var patternCanvas = document.getElementById('pattern_canvas');
    var w = patternCanvas.width = 256;
    var h = patternCanvas.height = 256;
    var hw = w * 0.5;
    var hh = h * 0.5;
    var c = patternCanvas.getContext('2d');
    // background color
    c.fillStyle = c1;
    c.fillRect(0, 0, w, h);
    // the 'v' shape
    c.fillStyle = c2;
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(hw, hh);
    c.lineTo(w, 0);
    c.lineTo(w, hh);
    c.lineTo(hw, h);
    c.lineTo(0, hh);
    c.closePath();
    c.fill();

    return c.createPattern(patternCanvas, 'repeat');
}

function loop() {
    draw();

    time += timeStep;
    frame ++;

    requestAnimationFrame(loop);
}

function draw() {
    ctx.fillStyle = backgroundFillPattern;
    ctx.fillRect(0, 0, viewWidth, viewHeight);

    if (letters.length === 0) return;

    ctx.strokeStyle = letterStrokeColor;
    ctx.lineWidth = 16;
    ctx.fillStyle = textFillPattern;

    var letter,
        margin = settings.spacing,
        x = (viewWidth - (totalTextWidth + margin * (settings.text.length - 1))) * 0.5,
        y = viewHeight * 0.5 + letters[0].height * 0.25,
        d = settings.waviness / letters.length;

    for (var i = 0; i < letters.length; i++) {
        letter = letters[i];
        letter.x = x + Math.cos(time + i * d) * 64;
        letter.y = y + Math.sin(time + i * d) * 184;
        letter.draw();

        x += letter.width + margin;
    }
}
    },[])

  return (
    <div>
    <body>
        <canvas id="drawing_canvas"></canvas>
        <canvas id="pattern_canvas" class="hidden"></canvas>
        <div id="text-measure" class="hidden"></div>

        <script src="//cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js"></script>
        <script src="js/main.js"></script>
    </body>
    </div>
  )
}

export default Mountain