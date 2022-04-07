import { everestImgs, moveIndex, animationIndex, selectionIndex, selectedImg} from "./script"

everestImgs.forEach((item, i) => {
    item.addEventListener('click', function () {
        if ((moveIndex == 0) && (animationIndex == 0) && (selectionIndex != i)) {
            selectionIndex = i;
            changeImg(item);
            setTimeout(function () {
                animationIndex = 0
            }, 600);
        }
    })
})

function changeImg(item) {
    animationIndex = 1;
    selectedImg.classList.add('to-left');
    selectedImg.addEventListener('animationend', function () {
        selectedImg.classList.remove('to-left');
        if (item == everestImgs[0]) selectedImg.src = "/parallax/assets/everest1.jpg";
        if (item == everestImgs[1]) selectedImg.src = "/parallax/assets/everest2.jpg";
        if (item == everestImgs[2]) selectedImg.src = "/parallax/assets/everest3.jpg";
        selectedImg.classList.add('from-right');
        selectedImg.addEventListener('animationend', function () {
            selectedImg.classList.remove('from-right');
        })
    })
}