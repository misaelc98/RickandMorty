import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./Card.module.css";
import { useEffect } from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

function Card(props) {
  const { onClose } = props;
  const { character, addFavorite, removeFavorite, myFavorites } = props;
  const navigate = useNavigate();

  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setFav] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [myFavorites]);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  function handleFavorite(character) {
    if (!isFav) {
      addFavorite(character);
      setFav(true);
    } else {
      removeFavorite(character);
      setFav(false);
    }
  }

  return (
    <div
      className={style.cardContainer}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={style.imageContainer}>
        <img
          className={`${style.characterImage} ${hovered && style.blur}`}
          src={character.image}
          alt={character.name}
          onClick={navigateHandler}
        />
        {hovered && (
          <h2 className={style.nameHovered} onClick={navigateHandler}>
            {character.name}
          </h2>
        )}

        {isFav ? (
          <button
            className={style.favButton}
            onClick={() => handleFavorite(character.id)}
          >
            <MdOutlineFavorite size={45} color="red" />
          </button>
        ) : (
          <button
            className={style.favButton}
            onClick={() => handleFavorite(character)}
          >
            <MdOutlineFavoriteBorder size={45} color="white" />
          </button>
        )}
      </div>

      <div>
        {closeBtn && (
          <button
            className={style.closeButton}
            onClick={() => {
              onClose(character.id);
            }}
          >
          <AiFillCloseCircle size={45} color="white" />
          </button>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
