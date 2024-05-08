function changeScrollAmount() {
  var scrollAmountInput = document.getElementById("scrollAmountInput").value;
  var myMarquee = document.getElementById("myMarquee");
  myMarquee.setAttribute("scrollamount", scrollAmountInput);
}
