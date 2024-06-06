const scroll_main = document.querySelector('#body');
scroll_main.addEventListener("DOMContentLoaded",function(){
    window.scrollTo(0,4800);
});
document.addEventListener("DOMContentLoaded", function() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const blockId = anchor.getAttribute('href');
            const blockElement = document.querySelector(blockId);
            if (blockElement) {
                blockElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                console.warn(`Element with id ${blockId} not found.`);
            }
        });
    }
});