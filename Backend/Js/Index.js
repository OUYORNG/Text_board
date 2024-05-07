const Text2Display = document.querySelector(".Text2Display")
const inputText = document.querySelector(".inputTxt")
const DisplayContainer = document.querySelector(".DisplayContainer")
const stop = document.querySelector(".stop")
const display = document.querySelector(".display")
const btn_primary = document.querySelector(".btn-primary").addEventListener("click", toggleFullScreen)
var responsiveWidth =parseInt(window.getComputedStyle(document.querySelector(".opacity-50")).width);
let con = false

//Full Screen Toggle

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    display.requestFullscreen();
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
stop.addEventListener("click", function(e){
    rotateRight()
})
function rotateRight(){
        let id = null;
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        console.log(responsiveWidth)

        function frame() {
          if (pos == responsiveWidth) {
            clearInterval(id);
            console.log("end")
          } else {
            pos++;
            DisplayContainer.style.right = pos + "px";
            console.log("while working")
          }
        }

}





