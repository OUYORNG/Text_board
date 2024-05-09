const Text2Display = document.querySelector(".Text2Display")
const inputText = document.querySelector(".inputTxt")
const DisplayContainer = document.querySelector(".DisplayContainer")
const stop = document.querySelector(".stop")
const display = document.querySelector(".display")
const btn_primary = document.querySelector(".btn-primary").addEventListener("click", toggleFullScreen)
const M2input1 = document.querySelector(".M2input1")
const M2input2 = document.querySelector(".M2input2")
const InputCode = document.querySelector(".InputCode")
const GenerateCodeBtn = document.querySelector(".GenerateCodeBtn")
const code1 = document.querySelector(".code1")
const code2 = document.querySelector(".code2")
const codeGenerated = document.querySelector(".codeGenerated")
const BlinkOnOff = document.querySelector(".BlinkOnOff")
const KeepScreenON = document.querySelector(".KeepScreenON")
const ChooseFont = document.querySelector(".ChooseFont")
const Increase = document.querySelector(".Increase")
const Decrease = document.querySelector(".Decrease")
const txt_color = document.querySelector(".txt_color")
var responsiveWidth =parseInt(window.getComputedStyle(document.querySelector(".opacity-50")).width);

//Full Screen Toggle
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    display.requestFullscreen();
    console.log("index")
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

//Live Update text to display while inserting new text
inputText.addEventListener("keyup", () => {
    Text2Display.textContent = inputText.value
})

//Blink On Off
BlinkOnOff.addEventListener("click",()=>{
  if(BlinkOnOff.checked == true){
    Text2Display.style.animation = "blinker 0.1s linear infinite"
  }else{
    Text2Display.style.animation = ""
  }
})
//Keep Screen on off
KeepScreenON.addEventListener("click",()=>{
  if(KeepScreenON.checked == true){
    navigator.wakeLock.request("screen").then(function(wakeLock) {
  }).catch(function(err) {
      console.error("Failed to request wake lock:", err);
  });
  }
})
//Choose Font 
ChooseFont.addEventListener("click",()=>{
  // ChooseFont.value = Text2Display.style.font-family = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;";
  if(ChooseFont.value == "Tay-Sequoia"){
    ChooseFont.value = Text2Display.classList.toggle("font-mono")
    console.log("Font Selected")
  }
})
//Font Size
class fontsize{
  constructor(size){
    this.size = size
  }
  increaseSize(){
    this.size ++
    Text2Display.style.fontSize = this.size + "px"
  }
  decreaseSize(){
    this.size --
    Text2Display.style.fontSize = this.size + "px"
  }
}
Increase.addEventListener("click", ()=>{
  var size = new fontsize(parseInt(window.getComputedStyle(Text2Display).fontSize))
  size.increaseSize()
})
Decrease.addEventListener("click", ()=>{
  var size = new fontsize(parseInt(window.getComputedStyle(Text2Display).fontSize))
  size.decreaseSize()
})

//Set Font color
txt_color.addEventListener("input", ()=>{
  if(txt_color != "#000000" ){
    Text2Display.style.color = txt_color.value;
  }
})


//Multiple Devices Mode
//Live Update text
function livetext(){
  Text2Display.textContent = M2input1.value + M2input2.value
}
M2input1.addEventListener("keyup", () => {
  livetext()
    M2input1.addEventListener("keyup", function(e){
      livetext()
      console.log("Input1 listening")
    })
    M2input2.addEventListener("input", function(e){
      livetext()
      console.log("Input2 listening")
    })
})

GenerateCodeBtn.addEventListener("click", () => {
  if(M2input1.value != "" && M2input2.value !=""){
    codeGenerated.style.display = "flex"  
    var randomNumber = Math.floor(Math.random() * 10000);
    var code = randomNumber.toString().padStart(4, '0');
    var codeInt = parseInt(code) +1
    code1.textContent = "Device 1: " + code
    code2.textContent = "Device 2: " + codeInt
    sendData("Device1",code,M2input1.value)
    sendData("Device2",codeInt,M2input2.value)
    
    console.log(M2input1.value,code)
    console.log(M2input2.value)
    console.log(code)
    console.log(codeInt)
  }else{
    alert("Please enter both of inputs, otherwise you should use \"1 Device\" mode")
  }
})



//Send Data
function sendData(name,code,data) {
  var dataToSend = {
      key: data,
      Number: code
  };
  var jsonData = JSON.stringify(dataToSend);
  localStorage.setItem(name, jsonData);
  console.log(dataToSend);
}







