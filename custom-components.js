//checkbox start
var customCheckboxes = document.querySelectorAll(".custom-checkbox");
customCheckboxes.forEach((el) => {
  el.style.setProperty("--size", el.getAttribute("data-size"));
  el.style.setProperty("--color", el.getAttribute("data-color"));
  el.style.setProperty(
    "--checked-color",
    el.getAttribute("data-checked-color")
  );
});
//checkbox end
//radio start
var customRadios = document.querySelectorAll(".custom-radio-button");
customRadios.forEach((el) => {
  el.style.setProperty("--size", el.getAttribute("data-size"));
  el.style.setProperty("--color", el.getAttribute("data-color"));
  el.style.setProperty(
    "--checked-color",
    el.getAttribute("data-checked-color")
  );
});
//radio end
//slider start
const customSlider = document.querySelectorAll(".custom-slider");
customSlider.forEach((el) => {
  (function () {
    var height = el.getAttribute("data-height")
      ? parseInt(el.getAttribute("data-height").replace("px", ""))
      : 4;
    var thumbSize = el.getAttribute("data-thumb-size")
      ? parseInt(el.getAttribute("data-thumb-size").replace("px", ""))
      : 20;
    height > thumbSize
      ? el.style.setProperty("--margin-adjust", `${(height - thumbSize) / 2}px`)
      : el.style.setProperty("--margin-adjust", "calc(var(--thumb-size)*-0.4)");
    el.style.setProperty("--height", el.getAttribute("data-height"));
    el.style.setProperty("--thumb-size", el.getAttribute("data-thumb-size"));
    el.style.setProperty("--color", el.getAttribute("data-color"));
    valPercent = (el.value / el.max) * 100;
    el.style.background = `linear-gradient(to right, ${
      el.getAttribute("data-color") ? el.getAttribute("data-color") : "blue"
    } ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  })();
  var anotherfn = el.oninput;
  el.oninput = function () {
    valPercent = (this.value / this.max) * 100;
    this.style.background = `linear-gradient(to right, ${
      el.getAttribute("data-color") ? el.getAttribute("data-color") : "blue"
    } ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    anotherfn();
  };
});
//slider end
//ripple button start
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.querySelectorAll(".custom-ripple-button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
//ripple button end
