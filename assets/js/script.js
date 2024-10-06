document.addEventListener("DOMContentLoaded", function() {
    const asideElements = {
        dessert: document.querySelector('#aside-dessert'),
        bar: document.querySelector('#aside-bar'),
        food: document.querySelector('#aside-food')
    };

    const buttons = [
        document.querySelector('#btn-1'),
        document.querySelector('#btn-2'),
        document.querySelector('#btn-3')
    ];

    function showAside(activeAside) {
        Object.values(asideElements).forEach(aside => {
            aside.style.display = aside === activeAside ? 'flex' : 'none';
        });
    }

    buttons[0].addEventListener("click", () => showAside(asideElements.bar));
    buttons[1].addEventListener("click", () => showAside(asideElements.dessert));
    buttons[2].addEventListener("click", () => showAside(asideElements.food));

    const menu = new URLSearchParams(window.location.search).get('menu');
    showAside(asideElements[menu] || asideElements.dessert);
});
