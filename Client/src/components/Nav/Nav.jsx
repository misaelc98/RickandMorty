import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { AiOutlineLogout } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";

export default function Nav({ onSearch, random, log }) {

  const handleLogout = () => {
    log();
  };

  return (
    <div className={style.navContainer}>
      <div className={style.leftNav}>
        <NavLink className={style.buttonNeonHome} to="/home">
          <BiHomeAlt2 className={style.iconoHome2}/>
        </NavLink>
        <NavLink className={style.buttonNeonFavs} to="/favorites">
          FAVS
        </NavLink>
      </div>
      <SearchBar random={random} onSearch={onSearch} />
      <div className={style.rightNav}>
        <NavLink className={style.buttonNeonAbout} to="/about">
          ABOUT
        </NavLink>
        <NavLink className={style.buttonNeonLog} onClick={handleLogout}>
          <AiOutlineLogout className={style.iconoLog} />
        </NavLink>
      </div>
    </div>
  );
}
