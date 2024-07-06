let timer = 0.1;
const countDown = document.querySelector(".countdown");

let time = timer*60;

let timerId = setInterval(calculateTime, 1000);

document.querySelector(".btnStart").addEventListener("click", ()=> {
    document.querySelector("#natureAudio").play();
    document.querySelector("#natureVideo").play();
});

function calculateTime() {
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    countDown.textContent = `${minutes} : ${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(timerId);
        //window.location.href = "https://mainpage....";
        document.querySelector("#natureAudio").pause();
        document.querySelector(".btnRepeat").style.display = "block";
        document.querySelector(".btnStart").style.display = "none";
        document.querySelector(".par").style.display = "block";
        document.querySelector(".parTwo").style.display = "block";
        document.querySelector(".less").style.display = "block";
        document.querySelector(".more").style.display = "block";
        document.querySelector("#input").style.display = "block";
    }
}

document.querySelector(".btnRepeat").addEventListener("click", repeatTimer);
document.querySelector(".less").addEventListener("click", ()=> {
    let inputTime = Number(document.querySelector("#input").value);
    if (inputTime > 0) {
        document.querySelector("#input").value = inputTime- 1;
    }
});

document.querySelector(".more").addEventListener("click", ()=> {
    let inputTime = Number(document.querySelector("#input").value);
    document.querySelector("#input").value = inputTime + 1;
});

function repeatTimer() {
    timer = document.querySelector("#input").value;
    time = timer*60;
    document.querySelector(".btnRepeat").style.display = "none";
    document.querySelector(".par").style.display = "none";
    document.querySelector(".parTwo").style.display = "none";
    document.querySelector(".less").style.display = "none";
    document.querySelector(".more").style.display = "none";
    document.querySelector("#input").style.display = "none";
    document.querySelector("#natureAudio").play();
    document.querySelector("#natureVideo").play();
    timerId = setInterval(calculateTime, 1000);
}