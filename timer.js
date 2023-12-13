

    let durationInput = document.getElementById('durationInput');
    let startButton = document.getElementById('startBtn');
    let pauseButton = document.getElementById('pauseBtn');
    let resumeButton = document.getElementById('resumeBtn');
    let resetButton = document.getElementById('resetBtn');
    let timerDisplay = document.getElementById('timerDisplay');
    let timer;
    let duration;
    let currentTime;

    function startTimer() {
      duration = parseInt(durationInput.value) * 60;
      currentTime = duration;
      updateDisplay();

      startButton.disabled = true;
      pauseButton.disabled = false;
      resumeButton.disabled = true;
      resetButton.disabled = false;

      timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      if (currentTime > 0) {
        currentTime--;
        updateDisplay();
      } else {
        clearInterval(timer);
        resetTimer();
      }
    }

    function pauseTimer() {
      clearInterval(timer);
      startButton.disabled = true;
      pauseButton.disabled = true;
      resumeButton.disabled = false;
      resetButton.disabled = false;
    }

    function resumeTimer() {
      startButton.disabled = true;
      pauseButton.disabled = false;
      resumeButton.disabled = true;
      resetButton.disabled = false;

      timer = setInterval(updateTimer, 1000);
    }

    function resetTimer() {
      clearInterval(timer);
      startButton.disabled = false;
      pauseButton.disabled = true;
      resumeButton.disabled = true;
      resetButton.disabled = true;
      currentTime = 0;
      durationInput.value = '';
      updateDisplay();
    }

    function updateDisplay() {
      let minutes = Math.floor(currentTime / 60);
      let seconds = currentTime % 60;
      timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resumeButton.addEventListener('click', resumeTimer);
    resetButton.addEventListener('click', resetTimer);