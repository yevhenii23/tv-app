import { 
    FETCH_MOVIE_LIST, ADD_TO_MY_LIST,
    FETCH_MOVIE_LIST_SUCCESS, CHANGE_SEARCH_TEXT,
    DELETE_FROM_MY_LIST } from './actions'

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
            };
        case FETCH_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.list,
            };
        case CHANGE_SEARCH_TEXT:
            return {
                ...state,                
                searchText: action.text,
            };
        case ADD_TO_MY_LIST:
            return {
                ...state,
                favorites: getUniq([
                    ...state.favorites,
                    action.id
                ])
            };
        case DELETE_FROM_MY_LIST: 
            return {
                ...state,
                favorites: state.favorites.filter(id => id !== action.id)
            };
            
       default: 
           return state;
    }
}
