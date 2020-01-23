import { FETCH_MOVIE_LIST, ADD_TO_MY_LIST, ADD_ABOUT_INFO } from './actions'

export const initialState = {
    fetchedList: [],
    favorites: [],
    about:'',
};


export function movieListReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIE_LIST: 
            return {...state,fetchedList:action.payload}
        case ADD_TO_MY_LIST:
            return {...state,favorites:[...state.favorites,action.payload]}
        case ADD_ABOUT_INFO:
            return {...state, about:action.payload }
       default: 
           return state;
    }
}
