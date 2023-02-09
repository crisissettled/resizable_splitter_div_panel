const resizer = document.getElementById("dragMe");
const topSide = resizer.previousElementSibling;
const bottomSide = resizer.nextElementSibling;

// The current position of mouse
// let x = 0;
let y = 0;

let topHeight = 0;

const mouseDownHandler = function (e) {
  //   x = e.clientX;
  y = e.clientY;
  topHeight = topSide.getBoundingClientRect().height;

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

// Attach the handler
resizer.addEventListener("mousedown", mouseDownHandler);

const mouseMoveHandler = function (e) {
  //   const dx = e.clientX - x;
  const dy = e.clientY - y;

  const h =
    ((topHeight + dy) * 100) /
    resizer.parentNode.getBoundingClientRect().height;
  topSide.style.height = `${h}%`;

  document.body.style.cursor = "row-resize";

  topSide.style.userSelect = "none";
  topSide.style.pointerEvents = "none";

  bottomSide.style.userSelect = "none";
  bottomSide.style.pointerEvents = "none";
};

const mouseUpHandler = function () {
  resizer.style.removeProperty("cursor");
  document.body.style.removeProperty("cursor");

  topSide.style.removeProperty("user-select");
  topSide.style.removeProperty("pointer-events");

  bottomSide.style.removeProperty("user-select");
  bottomSide.style.removeProperty("pointer-events");

  // Remove the handlers of `mousemove` and `mouseup`
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);
};
