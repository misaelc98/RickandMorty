import { useState } from "react";
import styles from "./Alert.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

const AlertMessage = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div
      className={`${styles["alertmsg"]} ${show ? styles.show : styles.hide}`}
    >
      <div className={styles["alert-content"]}>
        <p>{message}</p>
        <button className={styles["close-button"]} onClick={handleClose}>
          <AiFillCloseCircle size={60} color="red" />
        </button>
      </div>
    </div>
  );
};

export default AlertMessage;
