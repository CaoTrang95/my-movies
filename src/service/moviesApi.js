import { LIST_MOVIES_TRENDING } from "../constants/apiConstants";
import { makeGet } from "./connectionManager";

const getListMovie = (params) =>
  makeGet(LIST_MOVIES_TRENDING + "/" + params.tabTrending)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.message));

export { getListMovie };
