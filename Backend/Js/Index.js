const Text2Display = document.querySelector(".Text2Display")
const inputText = document.querySelector(".inputTxt")

inputText.addEventListener("keyup", () => {
    Text2Display.textContent = inputText.value
})