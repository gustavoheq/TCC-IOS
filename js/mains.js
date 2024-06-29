function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close_white_36dp.svg"
    }
}

function imgSlider(anything) {
    document.querySelector('.cafe').src = anything;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color
}

window.sr = ScrollReveal({ reset: true })

sr.reveal('.area-1', { duration: 1000 });


