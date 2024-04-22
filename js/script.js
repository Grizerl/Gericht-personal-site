document.addEventListener("DOMContentLoaded", function() {
const aside1 = document.querySelector('#aside-dessert');
const aside2 = document.querySelector('#aside-bar');
const aside3 = document.querySelector('#aside-food');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


btn1.addEventListener("click", function() {
    aside1.style.display = "none";
    aside2.style.display = "flex";
    aside3.style.display = "none";
});

btn2.addEventListener("click", function() {
    aside1.style.display = "flex";
    aside2.style.display = "none";
    aside3.style.display = "none";
});

btn3.addEventListener("click", function() {
    aside1.style.display = "none";
    aside2.style.display = "none";
    aside3.style.display = "flex";
});
const params = new URLSearchParams(window.location.search);
const menu = params.get('menu');

if (menu === 'bar') {
    aside2.style.display = "flex";
    aside1.style.display = "none";
    aside3.style.display = "none";
} else if (menu === 'desserts') {
    aside2.style.display = "none";
    aside1.style.display = "flex";
    aside3.style.display = "none";
} else if (menu === 'food') {
    aside2.style.display = "none";
    aside1.style.display = "none";
    aside3.style.display = "flex";
}
});
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const content = document.getElementById("header");
    burger.addEventListener("click", () => {
        content.classList.toggle("open");
    });
});
