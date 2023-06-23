import {connect} from "react-redux"; 
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Card.module.css"; 
import { useEffect } from "react";



function Card(props) {
  const {onClose} = props
  const {character, addFavorite, removeFavorite, myFavorites} = props;
  const navigate = useNavigate();

  const [closeBtn,setcloseBtn] = useState(true);
  const [isFav,setFav] = useState(false);

  useEffect(()=>{
  if (!onClose){
    setcloseBtn(false)
  }},[])


  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === character.id) {
          setFav(true);
       }
    });
 }, [myFavorites]);
 
  function navigateHandler() {
    navigate(`/detail/${character.id}`)
  };

  function handleFavorite(character) {
    if(!isFav){
      addFavorite(character)
      setFav(true)
    }else{
      removeFavorite(character)
      setFav(false)
    }
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img className={style.characterImage} src={character.image} alt="character.name" onClick={navigateHandler}/>
        <h2 className={style.name}>{character.name} </h2>

    {    isFav ? (
      <button onClick={()=>handleFavorite(character.id)}>❤️</button>
   ) : (
      <button onClick={()=>handleFavorite(character)}>🤍</button>
   )}

      </div>  

      <div className={style.atributes}> 
        <h2>Gender: {character.gender}</h2>
        <h2>Species: {character.species}</h2>
      {closeBtn && (<button className={style.closeButton} onClick = {()=>{onClose(character.id)}}>X</button>)}
        </div>        
    </div>
   );
}

const mapDispatchToProps = (dispatch) =>{

  return{
    addFavorite: (character) => dispatch(addFavorite(character)),

    removeFavorite: (id) => dispatch(removeFavorite(id))
  };
};

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)