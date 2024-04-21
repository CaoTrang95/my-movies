import {
  LIST_MOVIES_LATEST_TRAILERS_IN_THEATERS,
  LIST_MOVIES_LATEST_TRAILERS_ON_TV,
  LIST_MOVIES_POPULAR_IN_THEATERS,
  LIST_MOVIES_POPULAR_ON_TV,
  LIST_MOVIES_POPULAR_SCREAMING,
  LIST_MOVIES_TRENDING,
} from "../constants/apiConstants";
import { makeGet } from "./connectionManager";

const getListMoviesTrending = (params) =>
  makeGet(LIST_MOVIES_TRENDING + "/" + params.tabTrending)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.message));

const getListMoviesTrailers = (params) => {
  let url;
  if (params.tabTrailers === "in-theaters")
    url = LIST_MOVIES_LATEST_TRAILERS_IN_THEATERS;
  else if (params.tabTrailers === "on-tv")
    url = LIST_MOVIES_LATEST_TRAILERS_ON_TV;
  return makeGet(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.message));
};

const getListMoviesPopular = (params) => {
  let url;
  if (params.tabPopular === "in-theaters")
    url = LIST_MOVIES_POPULAR_IN_THEATERS;
  else if (params.tabPopular === "on-tv") url = LIST_MOVIES_POPULAR_ON_TV;
  else if (params.tabPopular === "screaming")
    url = LIST_MOVIES_POPULAR_SCREAMING;
  return makeGet(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.message));
};
export { getListMoviesTrending, getListMoviesPopular, getListMoviesTrailers };
