const Display = document.getElementById("Display");
function appendToDisplay(input) {
  Display.value += input;
}
function clearDisplay() {
  Display.value = "";
}
function calculate() {
  try {
    Display.value = eval(Display.value);
  } catch (error) {
    Display.value = "Error";
  }
}
function clearLast() {
  let Display = document.getElementById("Display");
  Display.value = Display.value.slice(0, -1);
}
