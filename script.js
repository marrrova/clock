const hourArrouw = document.querySelector(" .hour")
const minArrouw = document.querySelector(" .min")
const secArrouw = document.querySelector(" .sec")



setInterval(() => {
const date = new Date()
const hour = date.getHours()
const min = date.getMinutes()
const sec = date.getSeconds()
console.log(hour, min, sec)

    hourArrouw.style.transform = "rotate(" + hour * 30 + min / 2 + "deg)"

    minArrouw.style.transform = "rotate(" + min * 6 + sec / 10 + "deg)"
    secArrouw.style.transform = "rotate(" + sec * 6 + "deg)"

}, 1000);