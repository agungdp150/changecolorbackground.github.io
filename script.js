const colorRandom = document.querySelector('.colorRandom');
const bodyBack = document.querySelector('body');

const colors = ["blue", "aqua", "magenta", "#3b5998"];

colorRandom.addEventListener("click", changeColor);

function changeColor () {
    // bodyBack.style.backgroundColor = colors[2];
    let random = Math.floor (Math.random ()* colors.length);
    bodyBack.style.backgroundColor = colors[random];
} 