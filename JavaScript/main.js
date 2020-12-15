'use strict'; {

  let tm = 0;
  let timer = document.getElementById("timer");
  let startbtn = document.getElementById("starnBtn");
  let stopbtn = document.getElementById("stopBtn");
  let resetbtn = document.getElementById("resetBtn");
  let id;

  function start() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    tm++;
    let min = Math.floor(tm / 100 / 60);
    let sec = Math.floor(tm / 100);
    let msec = tm % 100;

    if (min < 10) min = "0" + min;
    if (sec >= 60) sec = sec % 60;
    if (sec < 10) sec = "0" + sec;
    if (msec < 10) msec = "0" + msec;

    timer.innerHTML = min + ":" + sec + ":" + msec;
    id = setTimeout(start, 10);
  };

  function stop() {
    clearTimeout(id);

    startBtn.disabled = false;
    stopBtn.disabled = true;
  };

  function reset() {
    clearTimeout(id);
    tm = 0;
    timer.innerHTML = "00:00:00";

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
  };

  startBtn.addEventListener('click', start);
  stopBtn.addEventListener('click', stop);
  resetBtn.addEventListener('click', reset);
}