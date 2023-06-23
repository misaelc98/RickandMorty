import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css";

function Detail() {

    const {id} = useParams();

    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div className={style.detailContainer}>
            <div>
                <h1 className={style.name}>{character.name}</h1>
                <img className={style.img} src={character.image} alt={character.name} />
            </div>
            <div className={style.details}>
                <div>
                    <h3>Species: </h3>
                    <p> {character.species}</p>
                </div>
                <div>
                    <h3>Gender: </h3>
                    <p> {character.gender}</p>
                </div>
                <div>
                    <h3>Status: </h3>
                    <p> {character.status}</p>
                </div>
                <div>
                    <h3>Origin: </h3>
                    <p> {character.origin?.name}</p>
                </div>
                <div>
                    <h3>Location: </h3>
                    <p> {character.location?.name}</p>
                </div>

            </div>
        </div>
    )
};
//el ? quiere decir que es condicional, si no lo tiene no lo renderizara.

export default Detail;