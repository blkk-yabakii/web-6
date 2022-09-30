const label = document.getElementById('label');
const url = document.getElementById('url');
const button = document.getElementById('tombol');
const output = document.getElementById('output');

const daftar = [];

function onClick() {
  const item = {
    label: label.value,
    url: url.value,
  };

  if (item.label.length > 0 && item.url.length > 0) {
    daftar.push(item);

    let html = '';
    html += '<ul>';

    for (let i = 0; i < daftar.length; i++) {
      const li = '<li><a href="' + daftar[i].url + '">' + daftar[i].label + '</a></li>';
      html += li;
    }

    html += '</ul>';
    output.innerHTML = html;

    label.value = '';
    url.value = '';
  }
}

button.addEventListener("click", onClick);
