const dateEl = document.getElementById('date');
const dayEl = document.getElementById('day');
const todayEl = document.getElementById('day-today');
const timeEl = document.getElementById('time');

/*-------------get today date-----------*/
var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
dateEl.innerHTML = date;

/*-------------get current time-----------*/


function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    timeEl.innerHTML = time;
    setTimeout(showTime, 1000);

}
showTime();

/*-------------get current day-----------*/
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
dayEl.innerHTML = day;
todayEl.innerHTML = day;




