let salary = {
    Babaryko: 49,
    Tcepkalo: 13,
    Tcihanouski: 22,
    Lukashenko: 3,
    Cherechen: 1,
    Kanapackaya: 2,
    Dmitriyev: 1,
    Tabolich: 2,
    Gaydukevich: 3,
    'Against all': 4,
}

let clone = Object.assign ({}, salary);
let count = 0;
let sum = 0;
for (let  key in salary) {
    sum += salary[key];
    count++;
}
let middle = sum / count;
salary.middle = middle;

let countMax = 0;
for (let key in clone) {
    if (clone[key] >= middle) countMax++
}
salary.aboveAverage = countMax;

let max = salary.Lukashenko;
for (let key in clone) {
    if (clone[key] >= max) max = clone[key]
}
for (let key in clone) {
    if (clone[key] == max) {
        alert (`Самый большой рейтинг (согласно интернет ресурсам) у ${key} равный ${clone[key]}%`);
    }
}

let tarakan = salary.Lukashenko;
let Narod = sum - tarakan;