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

const slider = document.querySelector("input");
const value = document.querySelector(".value");
const scrollAmount = document.getElementById("scroll-amount");

value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value;
  scrollAmount.setAttribute("scrollamount", this.value);
};
