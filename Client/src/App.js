import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/Views/About/About.jsx";
import Error from "./components/Views/ErrorPage/ErrorPage";
import Landing from "./components/Views/Landing/Landing.jsx";
import { useEffect } from "react";
import Favorites from "./components/Views/Favorites/Favorites";
import { useDispatch } from "react-redux";
import { removeFavorite } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [access, setAccess] = useState(true); // VOLVE A PONER ESTO EN FALSE DESPUES

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function searchHandler(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          // Verificar si el personaje ya existe en el estado
          const isCharacterExist = characters.some(
            (character) => character.id === data.id
          );

          if (isCharacterExist) {
            window.alert("¡Este personaje ya ha sido agregado!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function randomHandler() {
    let haveIt = [];
    let random = (Math.random() * 826).toFixed();

    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      return false;
    }
  }

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));

    dispatch(removeFavorite(id));

    setCharacters(deleted);
  }

  function logout() {
    setAccess(false)
    setCharacters([])
    navigate("/")
  }

  return (
    <div className={style.app}>
      <div className={style.starsAnimation} />

      {location.pathname !== "/" && (
        <Nav log={logout} onSearch={searchHandler} random={randomHandler} />
      )}

      <Routes>
        <Route path="/" element={<Landing login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
