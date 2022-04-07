let header = document.querySelector('.header-items');
        let main = document.querySelector('.main-items');
        let text = document.querySelector('.main-items__text');
        let scroll = document.querySelector('.main-items__scroll')
        let share = document.querySelector('.main-items__share')
        let mountain = document.querySelector('.main-section__mountain')
        let mainSection = document.querySelector('.main-section')
        let headerSection = document.querySelector('.header-section')
        let screenPosition = 0;

        let secondText = document.querySelector('.main-items-second__text')
        let videoPlayer = document.querySelector('.main-items-second__player')

        let pageNumber = Array.from(document.querySelectorAll('.page-number'))

        let mainImg = document.querySelector('.main-items-third__main-img')
        let gallery = document.querySelector('.main-items-third__gallery')

        export let everestImgs = document.querySelectorAll('.main-items-third__everest-img')
        export let selectedImg = document.querySelector('.main-items-third__selected-img')
        export let selectionIndex = 0;
        export let animationIndex = 0;

        export let moveIndex = 1;

        setTimeout(start, 1500);
        function start() {
            header.classList.remove('header-items_disabled')
            text.classList.remove('main-items__text_disabled')
            scroll.classList.remove('main-items__scroll_disabled')
            share.classList.remove('main-items__share_disabled')
            mountain.classList.remove('main-section__mountain_active')
            mainSection.style.backgroundSize = "100%";
            headerSection.style.backgroundSize = "100%";
            setTimeout(resetMoveIndex, 1000);
        }

        function resetMoveIndex() {
            moveIndex = 0;
        }

        function animationIndexReset() {
            animationIndex = 0;
        }

        function zeroFrame() {
            headerSection.style.backgroundPosition = ("center -450px")
            mainSection.style.backgroundPosition = ("center -580px")
            mountain.style.backgroundPosition = ("center -580px")
            scroll.classList.add('main-items__scroll_disabled');
            share.classList.add('main-items__share_disabled');
            text.classList.add('main-items__text_disabled');

            mainImg.classList.add('main-items-third__main-img_disabled')
            gallery.classList.add('main-items-third__gallery_disabled')

            setTimeout(zeroFrameRemove, 1500);
        }

        function zeroFrameRemove() {

            pageNumber[1].style.display = "none";
            mainImg.style.display = "none";
            gallery.style.display = "none";

            text.style.display = "none";
            scroll.style.display = "none";
            share.style.display = "none";
            mountain.style.display = "none";
            pageNumber[0].style.display = "flex";
            videoPlayer.style.display = "flex";
            secondText.style.display = "flex";
            setTimeout(firstFrameSetUp, 100);
        }

        function firstFrameSetUp() {
            main.style.flexDirection = "column";
            main.style.alignItems = "center";
            secondText.classList.remove('main-items-second__text_disabled')
            videoPlayer.classList.remove('main-items-second__player_disabled')
            setTimeout(pageNumberSet, 1000);
        }

        function pageNumberSet() {
            if (screenPosition == 1) {
                pageNumber[0].classList.remove('page-number_disabled')
            }
            else if (screenPosition == 2) {
                pageNumber[1].classList.remove('page-number_disabled')
            }
            setTimeout(resetMoveIndex, 1000);
        }


        function firstFrame() {
            headerSection.style.backgroundPosition = ("center -540px")
            mainSection.style.backgroundPosition = ("center -670px")
            secondText.classList.add('main-items-second__text_disabled')
            videoPlayer.classList.add('main-items-second__player_disabled')
            pageNumber[0].classList.add('page-number_disabled')
            pageNumber[1].classList.add('page-number_disabled')
            setTimeout(firstFrameRemove, 1000)
        }

        function firstFrameRemove() {
            secondText.style.display = "none";
            videoPlayer.style.display = "none";
            pageNumber[1].style.display = "flex";
            mainImg.style.display = "flex";
            gallery.style.display = "flex";
            setTimeout(secondFrameSetUp, 100);
        }

        function secondFrameSetUp() {
            mainImg.classList.remove('main-items-third__main-img_disabled')
            gallery.classList.remove('main-items-third__gallery_disabled')
            setTimeout(pageNumberSet, 1000);
        }

        everestImgs.forEach((item, i) => {
            item.addEventListener('click', function () {
                if ((moveIndex == 0) && (animationIndex == 0) && (selectionIndex != i)) {
                    selectionIndex = i;
                    changeImg(item);
                    setTimeout(animationIndexReset, 600);
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

window.addEventListener('wheel', function (e) {
    if (moveIndex == 0) {
        if (screenPosition == 0) {
            if (e.deltaY > 0) {
                screenPosition = 1
                moveIndex = 1;
                zeroFrame();
            }
        }
        else if (screenPosition == 1) {
            if (e.deltaY > 0) {
                screenPosition = 2
                moveIndex = 1;
                firstFrame();
            }
        }
        else if (screenPosition == 2) {
            if (e.deltaY < 0) {
                screenPosition = 1;
                moveIndex = 1;
                zeroFrame();
            }
        }
    }
})