import React from "react";
import { Buttons } from "./components/Buttons";
import styles from "./App.module.css";
import "./App.css";
import { useTimer } from "./hooks/useTimer.jsx";

export default function App() {
  const { minutes, status, renders, startBtn, stopBtn, resetBtn, seconds } =
    useTimer();

  return (
    <div className={styles.app}>
      <div>
        <span className={styles.timer}>
          {minutes}:{seconds}
        </span>
        <br />
        <span># of renders: {renders}</span>
        <hr />
      </div>
      <Buttons
        startBtn={startBtn}
        stopBtn={stopBtn}
        resetBtn={resetBtn}
        status={status}
      />
    </div>
  );
}
