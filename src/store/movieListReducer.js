import { FETCH_MOVIE_LIST, ADD_TO_MY_LIST,} from './actions'

export const initialState = {
    fetchedList: [],
    favorites: [],
};

const getUniq = array => Array.from(new Set(array));

export function movieListReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_MOVIE_LIST: 
            return {
                ...state,
                fetchedList:action.payload
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
