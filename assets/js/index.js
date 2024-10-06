document.addEventListener('DOMContentLoaded', function () {
    const aboutUsButton = document.getElementById('About_us');
    const burger = document.getElementById("burger");
    const content = document.getElementById("header");

    if (aboutUsButton) {
        aboutUsButton.addEventListener('click', function (e) {
            window.location.href = './index.html#About_us';  
        });
    }

    window.addEventListener('load', function () {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 0);
            }
        }
    });

    if (burger && content) { // Check if elements exist
        burger.addEventListener("click", () => {
            content.classList.toggle("open");
        });
    }
});
