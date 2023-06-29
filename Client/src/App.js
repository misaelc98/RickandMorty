import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/Views/About/About.jsx";
import Error from "./components/Views/ErrorPage/ErrorPage";
import Landing from "./components/Views/Landing/Landing.jsx";
import Favorites from "./components/Views/Favorites/Favorites";
import { removeFavorite, setError, closeError } from "./redux/actions";
import AlertMsg from "./components/AlertMsg/AlertMsg";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [access, setAccess] = useState(true);
  const showError = useSelector((state) => state.showError);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function searchHandler(id) {
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = response.data;

      if (data.name) {
        const isCharacterExist = characters.some(
          (character) => character.id === data.id
        );

        if (isCharacterExist) {
          dispatch(setError("¡Este personaje ya ha sido agregado!"));
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        dispatch(setError("¡No hay personajes con este ID!"));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function randomHandler() {
    let haveIt = [];
    let random = (Math.random() * 826).toFixed();

    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.unshift(random);
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
    setAccess(false);
    setCharacters([]);
    navigate("/");
  }

  const handleClose = () => {dispatch(closeError())};

  return (
    <div className={style.app}>
      <div className={style.starsAnimation} />

      {showError && <AlertMsg handleClose={handleClose} />}

      <Routes>
        <Route path="/" element={<Landing login={login} />} />

        <Route
          path="/home"
          element={
            <>
              <Nav
                log={logout}
                onSearch={searchHandler}
                random={randomHandler}
              />
              <Cards characters={characters} onClose={closeHandler} />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Nav log={logout} />
              <About />
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <>
              <Nav log={logout} />
              <Detail />
            </>
          }
        />

        <Route
          path="/favorites"
          element={
            <>
              <Nav log={logout} />
              <Favorites />
            </>
          }
        />

        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
