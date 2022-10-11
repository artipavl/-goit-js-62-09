const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");

let timerId = null;
let changeBogyColor = false;

btnStart.addEventListener('click', onBodyColorStart);
btnStop.addEventListener('click', onBodyColorStop);

offbtn(btnStop);

function onBodyColorStart(e) {
    if (changeBogyColor) {
        return;
    }
    
    offbtn(e.currentTarget);
    onbtn(btnStop);
    changeBogyColor = true;
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    },1000);
}

function onBodyColorStop() {
    clearInterval(timerId);
    changeBogyColor = false;
    onbtn(btnStart);
    offbtn(btnStop);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function offbtn(btn) {
    btn.setAttribute("disabled", "disabled");
}

function onbtn(btn) {
    btn.removeAttribute("disabled");
}