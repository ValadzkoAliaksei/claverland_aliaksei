"use striсt";
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
  table.rows[i].cells[(table.rows.length -1) - i].style.backgroundColor = 'red';
}