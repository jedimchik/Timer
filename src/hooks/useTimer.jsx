import { useMemo, useState, useEffect, useRef } from "react";

function useTimer() {
  const [timer, setTimer] = useState(0);
  const [status, setStatus] = useState(false);
  const renders = useRef(0);
  const intervalRef = useRef(null);

  //fn to activate timer
  function startBtn() {
    if (!status) {
      setStatus(true);
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  }

  //fn to stop the timer
  function stopBtn() {
    if (status) {
      setStatus(false);
      clearInterval(intervalRef.current);
    }
  }

  //fn to reset to 0
  function resetBtn() {
    clearInterval(intervalRef.current);
    setStatus(false);
    setTimer(0);
  }

  //fn to increment render count
  function renderCount() {
    renders.current++;
  }

  //format the seconds into (min : sec)
  const minSec = useMemo(() => {
    let seconds = timer % 60;
    let minutes = (timer - seconds) / 60;

    seconds = String(seconds).length > 1 ? seconds : "0" + String(seconds);
    minutes = String(minutes).length > 1 ? minutes : "0" + String(minutes);

    return { minutes, seconds };
  }, [timer]);

  //reset automatically at 59:59
  useEffect(() => {
    if (Number(minSec.minutes) == 59 && Number(minSec.seconds) == 59) {
      resetBtn();
    }
  }, [timer]);

  renderCount();

  return {
    minutes: minSec.minutes,
    seconds: minSec.seconds,
    status: status,
    renders: renders.current,
    startBtn: startBtn,
    stopBtn: stopBtn,
    resetBtn: resetBtn,
  };
}

export { useTimer };
