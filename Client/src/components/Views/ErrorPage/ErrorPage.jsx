import { NavLink } from "react-router-dom";
import style from "./ErrorPage.module.css";

function Error() {
  return (
    <div>
      <div class="space"></div>
      <div className={style.wrapper}>
        <div class="img-wrapper">
          <span className={style.span}>44</span>
        </div>
        <p className={style.p}>
          This page has been moved to another universe
        </p>
        <NavLink className={style.button} to="/home">
            GET ME HOME
            </NavLink>
      </div>
    </div>
  );
}

export default Error;
