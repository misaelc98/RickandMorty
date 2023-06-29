import styles from "./Alert.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { closeError } from "../../redux/actions";

/*
@param {string} error - El msj de error
@param {function} handleClose - funcion de cierre del mensaje
@return {JSX.ELEMENT} - Render del msj
*/

export default function AlertMsg({handleClose}) {
  const error = useSelector((state) => state.error);

   const funcioncita = () => {
    handleClose()
   }


  return (
    <div className={styles.msgContainer}>
      <div className={styles.msgContent}>
        <button className={styles.closeBtn} onClick={funcioncita}>
          x
        </button>
        <div className={styles.errorMsg}>{error}</div>
      </div>
    </div>
  );
}
