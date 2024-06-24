function imgSlider(anything){
    document.querySelector('.cafe').src = anything;
}

function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color
}

window.sr = ScrollReveal({reset: true})

sr.reveal('.area-1', {duration:1000});

