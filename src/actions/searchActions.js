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
    .get(`https://www.omdbapi.com/?s=${text}&apikey=b7a6d82f`)
  // опять таки урлу к апи и apikey стоит в .env выносить
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
    .get(`https://www.omdbapi.com/?i=${id}&apikey=b7a6d82f`)
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
