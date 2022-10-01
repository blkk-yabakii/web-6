const label = document.getElementById("label");
const url = document.getElementById("url");
const button = document.getElementById("tombol");
const output = document.getElementById("output");
const daftar = [];

function buatLink(label, url) {
  return '<a href="' + url + '">' + label + "</a>";
}

function buatItem(item) {
  return "<li>" + item + "</li>";
}

function buatDaftar(daftar) {
  let html = "";
  html += "<ul>";
  for (let i = 0; i < daftar.length; i++) {
    const link = buatLink(daftar[i].label, daftar[i].url);
    const list = buatItem(link);
    html += list;
  }
  html += "</ul>";
  return html;
}
function valid(item) {
  const ketemu = daftar.findIndex(function (elem) {
    return elem.label === item.label;
  });
  return item.label.length > 0 && item.url.length > 0 && ketemu === -1;
}
function onClick() {
  const item = {
    nama: label.value,
    link: url.value,
  };
  if (valid(item)) {
    daftar.push(item);
    output.innerHTML = buatDaftar(daftar);
    label.value = "";
    url.value = "";
  }
}
button.addEventListener("click", onClick);
