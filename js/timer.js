let timerInterval;
let timeInputs = document.querySelectorAll(".set");
let running = false;

function start() {
  if (!running) {
    running = true;
    let hours = parseInt(timeInputs[0].value || 0);
    let minutes = parseInt(timeInputs[1].value || 0);
    let seconds = parseInt(timeInputs[2].value || 0);

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    timerInterval = setInterval(function () {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        running = false;
        return;
      }
      totalSeconds--;
      let hoursLeft = Math.floor(totalSeconds / 3600);
      let minutesLeft = Math.floor((totalSeconds % 3600) / 60);
      let secondsLeft = totalSeconds % 60;

      timeInputs[0].value = hoursLeft;
      timeInputs[1].value = minutesLeft;
      timeInputs[2].value = secondsLeft;
    }, 1000);
  }
}

function stop() {
  clearInterval(timerInterval);
  running = false;
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  timeInputs[0].value = "";
  timeInputs[1].value = "";
  timeInputs[2].value = "";
}
