const container = document.querySelector(".container");
const leftSide = document.querySelector(".left");
const drag_bar = document.querySelector(".drag-bar");
const rightSide = document.querySelector(".right");
let throttlePause;

function mouseMoveHandler(e) {
  let container_left = container.offsetLeft;
  //   console.log(container_left, "container_left");
  let drag_bar_left = e.clientX - container_left;
  let leftSide_left = drag_bar_left - 5;
  let rightSide_left = drag_bar_left + 15;
  let client_width = container.clientWidth;
  if (drag_bar_left + 20 > client_width) return;
  drag_bar.style.left = drag_bar_left;
  leftSide.style.width = `${leftSide_left}px`;
  rightSide.style.left = `${rightSide_left}px`;

  console.log("mouse move", e);
}

function mouseDownHandler(e) {
  document.addEventListener("mousemove", mouseMoveHandler);
  drag_bar.style.background = "#666";
  console.log("mouse down");
}
function mouseUpHandler(e) {
  document.removeEventListener("mousemove", mouseMoveHandler);
  drag_bar.style.background = "#555";
  console.log("mouse up");
}

drag_bar.addEventListener("mousedown", mouseDownHandler);

document.addEventListener("mouseup", mouseUpHandler);
