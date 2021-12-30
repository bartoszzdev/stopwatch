const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")
let sec = 0
let milisec = 0
let interval

startBtn.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(initTimer, 10)
})

function initTimer() {
    const secItem = document.getElementById("seconds")
    const milisecItem = document.getElementById("miliseconds")

    milisec += 0.01
    let milisecStr = milisec.toFixed(2)

    if (milisecStr.substring(milisecStr.length - 2) == "00") {
        sec += 1

        if (sec < 10) {
            secItem.textContent = "0" + sec
        } else {
            secItem.textContent = sec
        }
    }

    milisecItem.textContent = milisecStr.substring(milisecStr.length - 2)
}