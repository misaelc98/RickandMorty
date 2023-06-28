import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/*  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

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
          setErrorMessage("¡Este personaje ya ha sido agregado!");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        setErrorMessage("¡No hay personajes con este ID!");
      }
      setShowAlert(true); // Mostrar el mensaje de alerta
    } catch (error) {
      console.log(error);
    }
  } 


   return (
    <div className={style.app}>
    

      <AlertMessage
        message={errorMessage}
        onClose={() => setShowAlert(false)} // Cerrar el mensaje de alerta
        show={showAlert}
      />

      {/* ... */
