import styles from "./Buttons.module.css";

function Buttons(props) {
  return (
    <div className={styles.buttons}>
      <button
        className={props.status ? [styles.hidden] : [styles.start]}
        onClick={props.startBtn}
      >
        Start
      </button>
      <button
        className={props.status ? [styles.stop] : [styles.hidden]}
        onClick={props.stopBtn}
      >
        Stop
      </button>
      <button
        className={props.status ? [styles.reset] : [styles.hidden]}
        onClick={props.resetBtn}
      >
        Reset
      </button>
    </div>
  );
}

export { Buttons };
