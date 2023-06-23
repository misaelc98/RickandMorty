import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar(props) {
   const {onSearch} = props
   const [id,setId] = useState([]);

   function changeHandler(e){
      let input = e.target.value

      setId(input)
   }


   return (
      <div className={style.SearchBar}>
         <input className={style.SearchInput} type="search" value={id} onChange={changeHandler}/>
         <button className={style.button} onClick={()=>onSearch(id)}>AGREGAR</button>
      </div>
   );
}
