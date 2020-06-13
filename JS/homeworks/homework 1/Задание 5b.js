let numberImg;
let widthImg;
let widthBody = 1024;
let marginImg = 5;
do {
    alert('Пожалуста, введите численные значения. Кроме 0');
    numberImg = +prompt("Сколько изображений в галерее?");
    widthImg = +prompt("Какова ширина каждого изображения?");
    if ((widthImg + marginImg * 2) > widthBody) {
        alert('Ширина изображения больше ширины страницы. Пожалуста, введите ширину изображения меньше 1015');
    }
} while (!numberImg || !widthImg || (widthImg + marginImg * 2) > widthBody);
let body = document.querySelector('.body');
body.style.width = `${widthBody}px`;
let numberImgRow = (widthBody - widthBody % (widthImg + marginImg * 2)) / (widthImg + marginImg * 2);
if (numberImgRow < numberImg) {
    alert(`количество изображений в каждом ряду ${numberImgRow}`);
    let numberRow = (numberImg - numberImg % numberImgRow) / numberImgRow;
    alert(`количество полных рядов в галерее ${numberRow}`);
    let numberImgLastRow = numberImg - numberImgRow * numberRow;
    alert(`количество изображений в последнем ряду ${numberImgLastRow}`);
} else {
    alert(`Получился 1 неполный ряд и в нем ${numberImg} изображений`);
}
for (let i = 0; i < numberImg; i += 1) {
    let img = document.createElement('img');
    img.className = 'img';
    img.src = 'wrw.png';
    body.appendChild(img);
    img.style.width = `${widthImg}px`;
    img.style.margin = `${marginImg}px`;
};