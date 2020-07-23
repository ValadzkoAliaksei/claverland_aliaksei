"use striсt";
let arr = {
    name: "Валадзько Аляксей Юр'евiч",
    age: 33,
    medicine: true,
}
let str = JSON.stringify(arr);
alert(str);
let arr2 = JSON.parse(str);
for(let key in arr2) {
    alert(`${key} : ${arr2[key]}`)
}