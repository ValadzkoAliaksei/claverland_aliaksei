let numberImg;
let widthImg;
let widthBody = 1024;
let marginImg = 5;
let body = document.querySelector('.body');
body.style.width = `${widthBody}px`;
if (confirm ("Все изображения одинаковой ширины?")) {
    do {
        alert("Пожалуста, введите численные значения. Больше 0");
        numberImg = +prompt("Сколько изображений в галерее?");
        widthImg = +prompt("Какова ширина каждого изображения в пикселях?");
        if ((widthImg + marginImg * 2) > widthBody) {
            alert("Ширина изображения больше ширины страницы. Пожалуста, введите ширину изображения меньше 1015");
        }
    } while (!numberImg || !widthImg || (widthImg + marginImg * 2) > widthBody || widthImg <= 0 || numberImg <= 0);
    let numberImgRow = (widthBody - widthBody % (widthImg + marginImg * 2)) / (widthImg + marginImg * 2);
    if (numberImgRow < numberImg) {
        alert(`Количество изображений в каждом ряду ${numberImgRow}`);
        let numberRow = (numberImg - numberImg % numberImgRow) / numberImgRow;
        alert(`Количество полных рядов в галерее ${numberRow}`);
        let numberImgLastRow = numberImg - numberImgRow * numberRow;
        if (numberImgLastRow !=0) {
            alert(`Количество изображений в последнем ряду ${numberImgLastRow}`);
        } else {
            alert(`Количество изображений в последнем ряду ${numberImgRow}`);
        };
    } else if (numberImg == 1) {
        alert(`Получился 1 неполный ряд и в нем ${numberImg} изображениe`);
        } else if (numberImg >= 5) {
            alert(`Получился 1 неполный ряд и в нем ${numberImg} изображений`);
            } else {
                alert(`Получился 1 неполный ряд и в нем ${numberImg} изображения`);
            };
    for (let i = 0; i < numberImg; i += 1) {
        let img = document.createElement('img');
        img.className = 'img';
        img.src = 'wrw.png';
        body.appendChild(img);
        img.style.width = `${widthImg}px`;
        img.style.margin = `${marginImg}px`;
    };
} else {
    let sumWidthImg = 0;
    let imgRow = 1;
    let sumI = 0;
    do {
        alert("Пожалуста, введите численное значение. Больше 0");
        numberImg = +prompt("Сколько изображений в галерее?");
    } while (!numberImg || numberImg <= 0);
    for (let i = 1; i <= numberImg; i += 1) {
        do {
            widthImg = +prompt(`Введите ширину ${i} изображения в пикселях числом меньше 1015`);
        } while (!widthImg || (widthImg + marginImg * 2) > widthBody || widthImg <=0);
        sumWidthImg = sumWidthImg + widthImg + marginImg * 2;
        if (sumWidthImg <= widthBody) {
            sumI++;
        } else {
            alert(`Количество изображений в ${imgRow} ряду равно ${sumI}`);
            imgRow++;
            sumI = 1;
            sumWidthImg = widthImg + marginImg * 2;
        };
        let img = document.createElement('img');
        img.className = 'img';
        img.src = 'wrw.png';
        body.appendChild(img);
        img.style.width = `${widthImg}px`;
        img.style.margin = `${marginImg}px`;
    };
    if (imgRow == 1) {
        alert(`Количество изображений в ${imgRow} не полном ряду равно ${sumI}`);
    } else {
        alert(`Количество рядов в галерее ${imgRow}`);
        alert(`Количество изображений в последнем ${imgRow} ряду равно ${sumI}`);
    };
};