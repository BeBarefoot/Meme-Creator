'use strict'
var gImgs;
var gidxImg = 0;
var gidxLine = 1;
var gMemeLines;


////////////////////////////////////canvas//////////////////////////////////////////

var gCanvas = document.querySelector('.canvas');
var gCtx = gCanvas.getContext('2d');


function createCanvas() {
    gCtx.canvas.width = 380;
    gCtx.canvas.height = gCtx.canvas.width - 10;
}

function getCanvas() {
    return gCanvas;
}

function getCtx() {
    return gCtx;
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function readImage(files) {
    hideControls()
    if (files && files[0]) {
        var readFile = new FileReader();
        readFile.onload = e => {
            var img = new Image();
            img.addEventListener("load", () => {
                gCtx.drawImage(img, 0, 0, gCanvas.height, gCanvas.width);
            })
            img.src = e.target.result;
        }
        readFile.readAsDataURL(files[0]);
    }
}

function getMousePos(evt) {
    var canvas = getCanvas();
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
////////////////////////////////////images//////////////////////////////////////////
function createImgs() {
    gImgs = [
        createImg('img/1.jpg', ['dance']),
        createImg('img/2.jpg', ['trump']),
        createImg('img/3.jpg', ['dog']),
        createImg('img/4.jpg', ['baby', 'dog']),
        createImg('img/5.jpg', ['baby']),
        createImg('img/6.jpg', ['cat']),
        createImg('img/7.jpg', ['hat']),
        createImg('img/8.jpg', ['baby', 'fat']),
        createImg('img/9.jpg', ['salt']),
        createImg('img/10.jpg', ['dance']),
        createImg('img/11.jpg', ['code']),
        createImg('img/12.jpg', ['nope']),
        createImg('img/13.jpg', ['salt']),
        createImg('img/14.jpg', ['monkey']),
        createImg('img/15.jpg', ['nope']),
        createImg('img/16.jpg', ['java']),
        createImg('img/17.jpg', ['dog']),
        createImg('img/18.jpg', ['tough']),
        createImg('img/19.jpg', ['dog']),
        createImg('img/20.jpg', ['baby']),
        createImg('img/21.jpg', ['monkey']),
        createImg('img/22.jpg', ['music']),
        createImg('img/23.jpg', ['nope']),
        createImg('img/24.jpg', ['dog']),
        createImg('img/25.jpg', ['nope']),
    ]
}

function createImg(url, keywords) {
    return {
        id: gidxImg++,
        url,
        keywords
    }
}

function getImgs() {
    return gImgs;
}


function getImgById(idx) {
    var img = gImgs.find(function(img) {
        return img.id === idx;
    });
    return img;
}

function saveCurrImg(id) {
    gMemeLines.imgId = id;
}


//////////////////////////////////////////Meme Lines////////////////////////////////////
function createMemeLines() {
    gMemeLines = [createMemeLine()];
}


function createMemeLine() {
    return {
        lineId: gidxLine++,
        txt: '',
        font: 'Impact',
        isBold: false,
        isShadow: false,
        stroke: { isStroke: false, color: '#ffffff' },
        size: 40,
        align: { x: 50, y: 30 },
        color: '#000000',
    }
}



function getMemeLines() {
    return gMemeLines;
}

function clearMemeLines() {
    gidxLine = 1;
}


////////////////////////////////////////Tags and Search////////////////////////////////////////////
function randomTextSize() {
    return Math.floor(Math.random() * (35 - 15 + 1)) + 15;
}

//////////////////////////////////////Language//////////////////////////////////////////////////
function setLanguage(lang) {
    if (!localStorage.lang) gLang = 'en'
    else if (lang) gLang = lang
    localStorage.lang = JSON.stringify(gLang)
    doTrans()
}



///////////////////////////////////Text//////////////////////////////////////////////////////


function getLineById(lineId) {
    return gMemeLines.find(meme => {
        return meme.lineId === lineId;
    })
}

function changeTxtLine(txt, lineId) {
    var currMeme = getLineById(lineId)
    currMeme.txt = txt;
}

function changeFontTxt(font, lineId) {
    var currLine = getLineById(lineId)
    currLine.font = font;
}

function changeSizeTxt(size, lineId) {
    var currLine = getLineById(lineId)
    currLine.size = size;
}

function changeColorTxt(colorTxt, lineId) {
    var currLine = getLineById(lineId)
    currLine.color = colorTxt;
}

function changeColorStroke(colorStroke, lineId) {
    var currLine = getLineById(lineId)
    currLine.stroke.color = colorStroke;
}

function setPositionLine(position, lineId) {
    var currLine = getLineById(lineId)
    currLine.position = position;
}

function isBold(boldBool, lineId) {
    var currLine = getLineById(lineId)
    currLine.isBold = boldBool;
}

function isShadow(shadowBool, lineId) {
    var currLine = getLineById(lineId)
    currLine.isShadow = shadowBool;
}

function isStroke(strokeBool, lineId) {
    var currLine = getLineById(lineId)
    currLine.stroke.isStroke = strokeBool;
}