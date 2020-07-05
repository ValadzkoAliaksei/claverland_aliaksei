"use striсt";
let cost = +prompt('Введите стоимость покупки. До копеек.');
while (isNaN(cost) || cost < 0 || (100 * cost % 1 != 0)) {
    alert('Вы ввели неправильное значение. Введите натуральное число, до сотых долей!');
    cost = +prompt('Введите стоимость покупки. До копеек.');
};
let amount = +prompt('Введите сумму внесенную в кассу. До копеек.');
while (isNaN(amount) || amount < 0 || (100 * amount % 1 != 0)) {
    alert('Вы ввели неправильное значение. Введите натуральное число, до сотых долей!');
    amount = +prompt('Введите сумму внесенную в кассу. До копеек.');
};

function ask(question, yes, no) {
    (amount >= cost) ? yes() : no();
  }
  
  let showOk = () => {
      alert(`Сдача с покупки составляет ${(amount - cost).toFixed(2)}руб.`);
  };

  let showCancel = function() {
    alert("Недостаточная сумма для оплаты.");
  }
  
  ask("Внесенных средств хватает для покупки?", showOk, showCancel);
  