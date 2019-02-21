import React from "react";
import styles from "./Switch.module.css";

const noop = () => {};

const Switch = ({ on, onClick }) => {
  const boxClassName = on ? styles.toggle__box_on : styles.toggle__box_off;
  const switchClassName = on
    ? styles.toggle__switch_on
    : styles.toggle__switch_off;

  return (
    <div
      className={styles.toggle}
      onClick={onClick ? onClick : () => console.error("No click handler yet.")}
    >
      <div className={boxClassName}>
        <input
          type="checkbox"
          className={styles.toggle__input}
          onChange={noop}
          checked={on}
        />
        <div className={switchClassName} />
      </div>
    </div>
  );
};

export { Switch as default };
