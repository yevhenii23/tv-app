import axios from 'axios';

export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST';
export const ADD_TO_MY_LIST = 'ADD_TO_MY_LIST';
export const ADD_ABOUT_INFO = 'ADD_ABOUT_INFO';


export const getAllMovies = () => (dispatch) => {
    let url = 'http://api.tvmaze.com/shows';
 
    axios.get(url)
    .then(res => {
        dispatch({
            type:FETCH_MOVIE_LIST,
            payload:res.data
        })
    })
}



export const getSearchMovies = (search) => (dispatch) => {
    let url = 'http://api.tvmaze.com/search/shows?q=' + search;
    axios.get(url)
    .then(res => {
        dispatch({
            type:FETCH_MOVIE_LIST,
            payload:res.data.map(res => res.show)
        })
    })
}


export const addToFavorites = (element) => {
    console.log(element)
    return {
        type: ADD_TO_MY_LIST,
        payload: element
    }
}

export const addAboutInfo = (about) => {
    return {
        type: ADD_ABOUT_INFO,
        payload: about
    }
}