const images = [
    "bg_img00.jpg",
    "bg_img01.jpg",
    "bg_img02.jpg",
];

const chosseImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src=`img/${chosseImage}`;

//body 맨 뒤에 추가함
document.body.appendChild(bgImage);
//body 맨 앞에 추가함
// document.body.prepend(bgImage);