import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./actions";

const initialState = { myFavorites: [], allCharacters: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };
    case ORDER:
      let ordenammiento;
      if (action.payload === "A") {
        ordenammiento = ordenammiento.myFavorites.sort((a, b) =>
          a.id > b.id ? 1 : -1
        );
      } else {
        ordenammiento = ordenammiento.myFavorites.sort((a, b) =>
          b.id > a.id ? 1 : -1
        );
      }
      return {
        ...state,
        myFavorites: [...ordenammiento],
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return {
        ...state,
      };
  }
}
