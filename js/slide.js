let buttons = document.querySelectorAll('.buttons > img');

let slideContent = document.querySelectorAll('.image > div');

console.log(buttons);

buttons[0].addEventListener("click", slideLeft);

buttons[1].addEventListener("click", slideRight);

let interval = setInterval(slideRight, 5000);

function slideRight() {
    for (let index = 0; index < slideContent.length; index++) {
        if (index == slideContent.length -1) {
            for (let i = 0; i < slideContent.length; i++) {
                slideContent[i].classList.add("transition");
            }
            slideContent[0].classList.remove("transition");
            clearInterval(interval);
            break;
        }else{
            if (!slideContent[index].classList.contains("transition")) {
                for (let i = 0; i < slideContent.length; i++) {
                    slideContent[i].classList.add("transition");
                }
                slideContent[index + 1].classList.remove("transition");
                clearInterval(interval);
                break;
            }
        }
    }
    interval = setInterval(slideRight, 5000);
}

function slideLeft() {
    for (let index = 0; index < slideContent.length; index++) {
        if (!slideContent[index].classList.contains("transition")) {
            if (index == 0) {
                for (let i = 0; i < slideContent.length; i++) {
                    slideContent[i].classList.add("transition");
                }
                slideContent[slideContent.length -1].classList.remove("transition");
                clearInterval(interval);
                break;
            }else{
                for (let i = 0; i < slideContent.length; i++) {
                    slideContent[i].classList.add("transition");
                }
                slideContent[index -1].classList.remove("transition");
                clearInterval(interval);
                break;
            }
        }
    }
    interval = setInterval(slideRight, 5000);
}

