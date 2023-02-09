let isMouseDown = false;
const left = document.querySelector(".left");
const drag_bar = document.querySelector("#dragBar");
const right = document.querySelector(".right");

function throttle(cb, delay = 200) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}

let mouseMoveHandler = function (e) {
  if (isMouseDown) {
    console.log("mouse moving...", e);
    let drag_bar_width = drag_bar.offsetWidth;
    let left_zone_width = e.clientX - drag_bar_width / 2 - 5;
    console.log(left_zone_width, "left_zone_width");
    left.style.width = `${left_zone_width}px`;
  }
};

drag_bar.addEventListener("mousedown", function (e) {
  console.log("mouse down");
  isMouseDown = true;
  this.style.background = "#555";

  document.addEventListener("mousemove", mouseMoveHandler);
});

// drag_bar.addEventListener("mouseup", function (e) {
//   console.log("mouse up");
//   isMouseDown = false;
//   this.style.background = "black";
// });

document.addEventListener("mouseup", function (e) {
  console.log("mouse up - window");
  isMouseDown = false;
  drag_bar.style.background = "black";
  document.removeEventListener("mousemove", mouseMoveHandler);
});
