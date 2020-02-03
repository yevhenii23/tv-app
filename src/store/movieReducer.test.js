import { movieReducer } from './movieReducer';
import { FETCH_MOVIE_LIST, FETCH_MOVIE_LIST_SUCCESS, CHANGE_SEARCH_TEXT, ADD_TO_MY_LIST, DELETE_FROM_MY_LIST } from './actions';

describe('Movie reducer', () => {
    describe('#FETCH_MOVIE_LIST', () => {
        test('sets loading to true', () => {
            const initialState = {
                loading: false,
            }

            expect(movieReducer(initialState,{ type: FETCH_MOVIE_LIST})).toEqual({ loading: true })
        })
    })

    describe('#FETCH_MOVIE_LIST_SUCCESS', () => {
        test('sets movies', () => {
            const initialState = {
                loading:true,
                list: undefined,
            }
            
            const action = { type: FETCH_MOVIE_LIST_SUCCESS, list: [1,2,3]};

            const result = movieReducer(initialState,action);

            expect(result).toEqual({
                loading: false,
                list: action.list,
            })

        })
    })

    describe('#CHANGE_SEARCH_TEXT', () => {
        test('set input value', () => {
            const initialState = {
                searchText:'',
            }

            const action = { type: CHANGE_SEARCH_TEXT, text: 'some text'};

            const result = movieReducer(initialState,action)

            expect(result).toEqual({
                searchText: 'some text',
            })
        })
    })

    describe('#ADD_TO_MY_LIST', () => {
        test('add new item to array',() => {
            const initialState = {
                favorites:[],
            }

            const action = { type: ADD_TO_MY_LIST, id:3 };

            const result = movieReducer(initialState,action)

            expect(result).toEqual({
                favorites:[3]
            })
        })
    })

    describe('#DELETE_FROM_MY_LIST', () => {
        test('delete item from list', () => {
            const initialState = {
                favorites: [2],
            }

            const action = { type: DELETE_FROM_MY_LIST, id:2 }

            const result = movieReducer(initialState,action)

            expect(result).toEqual({
                favorites:[]
            })
        })
    })
})