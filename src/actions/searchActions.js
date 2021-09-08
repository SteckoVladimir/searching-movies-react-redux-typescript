import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types'
import axios from 'axios'

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  })
}

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?s=${text}&apikey=263d22d8`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
      })
    )
    .catch((err) => console.error(err))
}

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?i=${id}&apikey=263d22d8`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.error(err))
}

export const setLoading = () => {
  return {
    type: LOADING,
  }
}
