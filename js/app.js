const input = document.getElementById('isian');
const button = document.getElementById('tombol');

const users = [];

function onClick() {
  const user = { name: input.value };
  users.push(user);

  console.log(users);
}

button.addEventListener('click', onClick);