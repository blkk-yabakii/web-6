const buttons = {
  left: document.getElementById("arrow-left"),
  right: document.getElementById("arrow-right"),
  up: document.getElementById("arrow-up"),
  down: document.getElementById("arrow-down"),
};

const player = document.getElementById('player');

const handlers = {
  left: function () {
    const left = player.style.left;
    if (left.length > 0) {
      const leftN = parseInt(left.slice(0, left.length - 2), 10);
      const result = leftN - 30;
      if (result >= 0) {
        player.style.left = result.toString() + 'px';
      }
    } else {
      player.style.left = '0px';
    }
  },
  right: function () {
    const left = player.style.left;
    if (left.length > 0) {
      const leftN = parseInt(left.slice(0, left.length - 2), 10);
      const result = leftN + 30;
      if (result < 300) {
        player.style.left = result.toString() + 'px';
      }
    } else {
      player.style.left = '30px';
    }
  },
  up: function () {
    const top = player.style.top;
    if (top.length > 0) {
      const topN = parseInt(top.slice(0, top.length - 2), 10);
      const result = topN - 30;
      if (result >= 0) {
        player.style.top = result.toString() + 'px';
      }
    } else {
      player.style.top = '0px';
    }
  },
  down: function () {
    const top = player.style.top;
    if (top.length > 0) {
      const topN = parseInt(top.slice(0, top.length - 2), 10);
      const result = topN + 30;
      if (result < 300) {
        player.style.top = result.toString() + 'px';
      }
    } else {
      player.style.top = '30px';
    }
  },
};

buttons.left.addEventListener("click", handlers.left);
buttons.right.addEventListener("click", handlers.right);
buttons.up.addEventListener("click", handlers.up);
buttons.down.addEventListener("click", handlers.down);
