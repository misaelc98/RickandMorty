import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const RESET = "RESET_FAV";
export const SET_ERROR = "SET_ERROR";
export const CLOSE_ERROR = "CLOSE_ERROR";

export const closeError = () => {
  try {
    return{
      type : CLOSE_ERROR,
      payload:false,
    }
  } catch (error) {
    console.log(error)
  }
}


export const setError = (message) => {
 try {
  return{
    type : SET_ERROR,
    payload: message,
  }
 } catch (error) {
    console.log(error)
 }
}

export const addFavorite = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const removeFavorite = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function resetFavorites() {
  return {
    type: RESET,
  };
}
