const users = [
  { name: "Imdadul Mungin", age: "20" },
  { name: "Muhamad Rizki", age: "20" },
  { name: "Muhammad Fikri", age: "20" },
  { name: "Sidik Purnomo", age: "20" },
  { name: "Ragil Waluyo", age: "20" },
  { name: "Roy Rehan", age: "20" },
  { name: "Abdulloh Muhamad Mutaqqin", age: "20" },
  { name: "Wafa", age: "20" },
  { name: "Vina Mk", age: "20" },
  { name: "Tifrohana Tz", age: "20" },
  { name: "Zulaikha", age: "20" },
  { name: "Putri hera", age: "20" },
  { name: "Evi K", age: "20" },
  { name: "Wielia W", age: "20" },
  { name: "Mella F", age: "20" },
  { name: "Waridatul w", age: "20" },
];

const div = document.querySelector('body > div')

const table = document.createElement('table')
const tbody = document.createElement('tbody')

for (let i = 0; i < users.length; ++i) {
  const user = users[i];
  const name = document.createElement('td')
  name.appendChild(document.createTextNode(user.name))
  const age = document.createElement('td')
  age.appendChild(document.createTextNode(user.age))
  const row = document.createElement('tr');
  row.appendChild(name);
  row.appendChild(age);
  tbody.appendChild(row);
}
table.appendChild(tbody);
div.appendChild(table);
