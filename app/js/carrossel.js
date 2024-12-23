const imgCarrossel = document.getElementById("img")
const img = document.querySelectorAll("#img img")
let qtdImg = 0;

function carrossel() {

    qtdImg++;

    if (qtdImg > img.length - 1 ) {
        qtdImg = 0;
    }

    imgCarrossel.classList.remove('fade-in');
    imgCarrossel.style.transform = `translateX(${ - qtdImg * 655}px)`;
    setTimeout(() => {
        imgCarrossel.classList.add('fade-in');
    }, 4500);
}


setInterval(carrossel,5000)