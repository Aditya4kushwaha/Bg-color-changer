const bodyEl = document.querySelector("body");

function changeBgColor(element) {
  const color = window.getComputedStyle(element).backgroundColor;
  bodyEl.style.backgroundColor = color;
}

function applyCustomColor() {
  const colorPicker = document.getElementById("customColorPicker");
  bodyEl.style.backgroundColor = colorPicker.value;
}
