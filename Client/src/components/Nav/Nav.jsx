import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function Nav({onSearch, random}){

return(
    
    <body className={style.Nav}>
      
      <a>
         <button><Link className={style.button1} to= "/home">HOME</Link></button>
      </a>
      
      <a>
         <button><Link to= "/about">ABOUT</Link></button>
      </a>
      
      <a>
         <button><Link to= "/favorites">FAVORITES</Link></button>
      </a>
      
      
      <SearchBar onSearch={onSearch} />
      <div>
         <button className="random"  onClick={random}>
             ADD RANDOM
         </button>
       </div>
    </body>
 );
}

