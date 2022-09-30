const input = document.getElementById('isian');
const button = document.getElementById('tombol');

function onClick() {
  const isiInput = input.value;
  console.log(isiInput);
}

button.addEventListener('click', onClick);