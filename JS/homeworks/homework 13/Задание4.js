"use striсt";
let delBlock = document.querySelector('.skyblue');
let cloneBlock = document.getElementById('violet');
let table = document.querySelector('tbody');
let cloneBlock2 = cloneBlock.cloneNode(true);
setTimeout(() => {
  delBlock.remove();
  table.append(cloneBlock2);
  table.insertAdjacentHTML('afterbegin', '<tr><td></td><td colspan = "31">График дежурст сотрудников на август 2020 года</td></tr>');
}, 1000);