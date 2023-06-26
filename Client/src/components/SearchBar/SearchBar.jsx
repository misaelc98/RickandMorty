import { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar(props) {
   const {onSearch, random} = props
   const [id,setId] = useState([]);

   function changeHandler(e){
      let input = e.target.value

      setId(input)
   }


   return (
      <div className={style.SearchBar}>
         
         <button className={style.buttonNeon} onClick={random}>
          RANDOM
        </button>
          
         <input className={style.SearchInput} type="search" value={id} onChange={changeHandler}/>
         
         <button className={style.buttonNeon} onClick={()=>onSearch(id)}>ADD</button>
         
      </div>
   );
}
