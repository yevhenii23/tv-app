import { FETCH_MOVIE_LIST, ADD_TO_MY_LIST, FETCH_MOVIE_LIST_SUCCESS, CHANGE_SEARCH_TEXT } from './actions'

export const initialState = {
    list: [],
    searchText: '',
    favorites: [],
    loading: false,
};

const getUniq = array => Array.from(new Set(array));

export function movieReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIE_LIST:
            return {
                ...state,
                loading: true,                
            }
        case FETCH_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.list,
            }
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,                
                searchText: action.text,
            }
        case ADD_TO_MY_LIST:
            return {
                ...state,
                favorites: getUniq([
                    ...state.favorites,
                    action.id
                ])
            }
       default: 
           return state;
    }
}
