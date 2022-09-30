const input = document.getElementById("isian");
const button = document.getElementById("tombol");

const output = document.getElementById("output");

const daftarNama = [];

function onClick() {
  const namaBaru = input.value;
  daftarNama.push(namaBaru);

  let html = '';
  html += '<ul>';
  for (let i = 0; i < daftarNama.length; i++) {
    const nama = daftarNama[i];
    html += '<li>' + nama + '</li>';
  }
  html += '</ul>';

  output.innerHTML = html;
}
button.addEventListener("click", onClick);
