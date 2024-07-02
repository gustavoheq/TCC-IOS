function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');
                document.querySelector('.icon').src = "../img/menu_white_36dp.svg"
        } else {
                menuMobile.classList.add('open');
                document.querySelector('.icon').src = "../img/close_white_36dp.svg"
        }
}

const container = document.getElementById("container")
const overlayCon = document.getElementById("overlayCon")
const overlayBtn = document.getElementById("overlayBtn")


overlayBtn.addEventListener('click', () => {
        container.classList.toggle('right-panel-active')

        overlayBtn.classList.remove('btnScaled');
        window.requestAnimationFrame(() => {
                overlayBtn.classList.add('btnScaled');
        })
})
