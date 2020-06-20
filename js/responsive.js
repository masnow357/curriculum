let size = screen.width;

let elem = document.querySelectorAll(".image > div > div");

let button = document.querySelector('.image > div > div > div > a');

resize();

window.addEventListener("resize", resize);

function resize() {
    size = screen.width;
    if (size <= 600) {
        elem[elem.length -1].classList.add('slideMedia');
        elem[elem.length -1].classList.remove('slideContent');
        button.addEventListener("click", function () {
            elem[elem.length -1].classList.add('slideClick');
            setTimeout(() => {
                elem[elem.length -1].classList.remove('slideClick');
            }, 1500);
        });
    }
}
