"use striсt";
let monitors = {
    Philips: 21,
    Asus: 19,
    Samsung: 23.5,
    LG24MK: 23.6,
    LG27GL: 27,
}

let monitorsSm = Object.fromEntries(
    Object.entries(monitors).map(([key, value]) => [key, (value * 2.54).toFixed(1)])
);
for (let key in monitorsSm) {
    alert(`${key}: ${monitorsSm[key]}`)
}

alert(`Количество моделей мониторов, содержащиеся в данном объекте равно: ${Object.keys(monitors).length}`);