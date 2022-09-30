const input = document.getElementById("isian");
const button = document.getElementById("tombol");

const output = document.getElementById('output');

function onClick() {
  const isiInput = input.value;

  output.innerHTML = isiInput;
}
button.addEventListener("click", onClick);
