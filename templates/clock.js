var countdown_time = 1;
function startClock(){
	var fiveMinutes = 60 * countdown_time, display = document.querySelector('#running_clock');
	updateClock(fiveMinutes, display);
}

function updateClock(duration, display){
	var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        --timer;
        if (timer < 0) {
            timer = 0;
        }
    }, 1000);
}