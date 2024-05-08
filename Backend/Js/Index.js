const Text2Display = document.querySelector(".Text2Display")
const inputText = document.querySelector(".inputTxt")
const DisplayContainer = document.querySelector(".DisplayContainer")
const stop = document.querySelector(".stop")
const display = document.querySelector(".display")
const btn_primary = document.querySelector(".btn-primary").addEventListener("click", toggleFullScreen)
const M2input1 = document.querySelector(".M2input1")
const M2input2 = document.querySelector(".M2input2")
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
//Send Data
function sendData() {
  sessionStorage.setItem('data', '');
  window.location.href = 'M2input2.html';
}














// stop.addEventListenaer("click", function(e){
// })
// function rotateRight(){
//         let id = null;
//         var pos = 0;
//         clearInterval(id);
//         id = setInterval(frame, 5);
//         console.log(responsiveWidth)

//         function frame() {
//           if (pos == responsiveWidth) {
//             clearInterval(id);
//             console.log("end")
//           } else {
//             pos++;
//             DisplayContainer.style.right = pos + "px";
//             console.log("while working")
//           }
//         }
// }





