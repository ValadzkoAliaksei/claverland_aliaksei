let img = document.querySelectorAll('.img');
let body = document.querySelector('.body');
let widthBody = 1024;
body.style.width = `${widthBody}px`;
let numberImg = 4;
let marginImg = 5;
let widthImg = widthBody / numberImg - marginImg * 2;
for (let i = 0; i < img.length; i += 1) {
    img[i].style.width = `${widthImg}px`;
    img[i].style.margin = `${marginImg}px`;
}
alert(`Ширина каждого изображения ${widthImg}`);