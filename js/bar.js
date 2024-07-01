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

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".one, .two, .three");

    elements.forEach(element => {
        element.classList.add("active");
    });
});
