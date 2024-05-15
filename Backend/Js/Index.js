// const slider = document.querySelector("input");
// const value = document.querySelector(".value");

// value.textContent = slider.value;
// slider.oninput = function () {
//   value.textContent = this.value;
//   document
//     .getElementById("scroll-amount")
//     .setAttribute("scrollamount", this.value);
// };
// function changeScrollAmount() {
//   var scrollAmountInput = value.textContent;
//   var myMarquee = document.getElementById("myMarquee");
//   myMarquee.setAttribute("scrollamount", scrollAmountInput);
// }

// Control speed marquee
const slider = document.getElementById("slider");
const value = document.getElementById("value");
const scrollAmount = document.getElementById("scroll-amount");

console.log(slider.oninput);

value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value;
  console.log(this.value);
  scrollAmount.setAttribute("scrollamount", this.value);
};

// directon marquee
const btnright = document.getElementById("right");
const btnleft = document.getElementById("left");

btnright.addEventListener("click", function () {
  console.log("hi");
  scrollAmount.setAttribute("direction", "right");
});

btnleft.addEventListener("click", function () {
  console.log("hi");
  scrollAmount.setAttribute("direction", "left");
});

// Text input
// function updateMarquee() {
//   const textInput = document.getElementById("textInput").value;
//   const marqueeElement = document.getElementById("scroll-amount");
//   marqueeElement.textContent = textInput;
// }

document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const marqueeElement = document.getElementById("scroll-amount");

  // Function to update marquee text content
  function updateMarquee() {
    marqueeElement.textContent = textInput.value;
  }

  // Update marquee text content on input change
  textInput.addEventListener("input", updateMarquee);
});

// const text = getElementById("text");
// console.log(text);

// document.addEventListener("DOMContentLoaded", input_value);
// function input_value() {
//   const slider = document.getElementById("slider");
//   const value = document.getElementById("value");
//   const scrollAmount = document.getElementById("scroll-amount");

//   value.textContent = slider.value;
//   slider.addEventListener("input", equaltext);

//   function equaltext() {
//     value.textContent = this.value;
//     scrollAmount.setAttribute("scrollamount", this.value);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.getElementById("slider");
//   const speedDisplay = document.getElementById("speed-display");
//   const marquee = document.getElementById("scroll-amount");

//   // Initialize marquee speed
//   let currentSpeed = slider.value;
//   marquee.scrollAmount = currentSpeed;

//   // Update marquee speed on slider change
//   slider.addEventListener("input", function () {
//     currentSpeed = parseInt(slider.value);
//     marquee.scrollAmount = currentSpeed;
//     speedDisplay.textContent = currentSpeed; // Update speed display
//   });

//   // Function to continuously update marquee speed
//   function updateScrollSpeed() {
//     marquee.scrollAmount = currentSpeed;
//     requestAnimationFrame(updateScrollSpeed);
//   }

//   // Start updating marquee speed
//   updateScrollSpeed();
// });
