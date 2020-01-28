import axios from 'axios';

export const FETCH_MOVIE_LIST = 'FETCH_MOVIE_LIST';
export const FETCH_MOVIE_LIST_SUCCESS = 'FETCH_MOVIE_LIST_SUCCESS';
export const ADD_TO_MY_LIST = 'ADD_TO_MY_LIST';
export const DELETE_FROM_MY_LIST = 'DELETE_FROM_MY_LIST';
export const CHANGE_SEARCH_TEXT ='CHANGE_SEARCH_TEXT';

const getUrl = (searchText) => searchText ? 'http://api.tvmaze.com/search/shows?q=' + searchText : 'http://api.tvmaze.com/shows';

export const fetchMovies = () => (dispatch, getState) => {
    const { searchText } = getState();
    const url = getUrl(searchText);

    dispatch({ type:FETCH_MOVIE_LIST });
    axios.get(url)
        .then(({ data: list }) => {
            dispatch({
                type:FETCH_MOVIE_LIST_SUCCESS,
                list: searchText ? list.map(res => res.show) : list,
            })
        })
}

export const addToFavorites = (id) => {
    return {
        type: ADD_TO_MY_LIST,
        id
    }
}

export const changeSearchText = (text) => {
    return {
        type: CHANGE_SEARCH_TEXT,
        text
    }
}

export const deleteFromFavorites = (id) => {
    return {
        type: DELETE_FROM_MY_LIST,
        id
    }    
}