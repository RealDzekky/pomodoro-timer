import { useState, useEffect } from "react";
import useSound from "use-sound";
import click from '../sounds/sound2.mp3';

function Timer(){
  const [workDuration, setWorkDuration] = useState(25 * 60); // 25 minutes in seconds
  const [breakDuration, setBreakDuration] = useState(5 * 60); // 5 minutes in seconds
  const [isWorking, setIsWorking] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0); // Initialize the Pomodoro count

  const [seconds, setSeconds] = useState(workDuration);

  const [playActive] = useSound(
    click,
    { volume: 0.5 }
  );


  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            if (isWorking) {
              setIsWorking(false);
              setSeconds(breakDuration);
            } else {
              setIsWorking(true);
              setSeconds(workDuration);
              setPomodoroCount((count) => count + 1); // Increment Pomodoro count
            }
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, workDuration, breakDuration, isWorking]);

  function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  function startTimer() {
    setIsRunning((prevState) => !prevState);
    playActive();
  }

  function resetTimer() {
    setIsRunning(false);
    setIsWorking(true);
    setSeconds(workDuration);
    playActive();
  }

  return (
  <div className="flex flex-col justify-center min-h-screen bg-base-300">
    <p className="text-center text-5xl font-extrabold m-10">
      {updateTimerDisplay(seconds)}
    </p>
    <div className="text-center text-xl mb-4">
        Pomodoro Count: {pomodoroCount}
      </div>
    <div className="flex flex-row my-5 justify-center">
      {isRunning ? (
        <button className="btn-primary btn-wide p-5 rounded" onClick={startTimer}>
          Stop
        </button>
      ) : (
        <button className="btn-accent btn-wide p-5 rounded" onClick={startTimer}>Start</button>
      )}
      <button className="btn-secondary p-5 btn-wide rounded" onClick={resetTimer}>
        Reset
      </button>
    </div>
  </div>
  )
};

export default Timer;