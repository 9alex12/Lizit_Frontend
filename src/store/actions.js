import axios from "axios";
import { ERROR, LOADING, READ_USERS, READ_LOCATION } from "./actionTypes";

export const fetchData = (searchParam = "") => async (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`https://rickandmortyapi.com/api/character/?name=${searchParam}`)
    .then((response) => {
      const data = response.data.results;

      dispatch({
        type: READ_USERS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: ERROR,
        payload: "El personaje no existe"
      });
    });
};

export const fetchDataLocation = (id = "") => async (dispath) => {
  axios
    .get(`https://rickandmortyapi.com/api/location/${id}`)
    .then((response) => {
      const dataLocation = response.data.results;
      console.log({ dataLocation });
      dispath({
        type: READ_LOCATION,
        payload: dataLocation
      });
    });
};
