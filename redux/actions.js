import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'your-api-key-here';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

export const getMovies = () => {
    return async dispatch => {
        const res = await axios.get(`${BASE_URL}`);
        if (res.data) {
            const { results } = res.data
            dispatch({
                type: GET_MOVIES,
                payload: results,
            });
        } else {
            console.log('Unable to fetch');
        }
    };
};

export const addFavorite = movie => dispatch => {
    dispatch({
        type: ADD_FAVORITE_ITEM,
        payload: movie,
    });
};

export const removeFavorite = movie => dispatch => {
    dispatch({
        type: REMOVE_FAVORITE_ITEM,
        payload: movie,
    });
};