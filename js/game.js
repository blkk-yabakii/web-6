const buttons = {
  left: document.getElementById("arrow-left"),
  right: document.getElementById("arrow-right"),
  up: document.getElementById("arrow-up"),
  down: document.getElementById("arrow-down"),
};

const handlers = {
  left: function () {
    console.log("left");
  },
  right: function () {
    console.log("right");
  },
  up: function () {
    console.log("up");
  },
  down: function () {
    console.log("down");
  },
};

buttons.left.addEventListener("click", handlers.left);
buttons.right.addEventListener("click", handlers.right);
buttons.up.addEventListener("click", handlers.up);
buttons.down.addEventListener("click", handlers.down);
