let date;
let hours;
let minutes;
let seconds;

let counter = setInterval(function (){
    showTime();
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}, 500 );

function showTime () {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
}