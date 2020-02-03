
import expect from 'expect'
import { ADD_TO_MY_LIST, DELETE_FROM_MY_LIST, CHANGE_SEARCH_TEXT } from './actions'
import { addToFavorites, changeSearchText, deleteFromFavorites } from './actions';

describe('action',() => {
    test('should create a action add to favorites', () => {
        const id = 3;

        const expectedAction = {
            type: ADD_TO_MY_LIST,
            id
        }

        expect(addToFavorites(id)).toEqual(expectedAction)

    })

    test('should change search text', () => {
        const text = 'aaa';

        const expectedAction = {
            type: CHANGE_SEARCH_TEXT,
            text
        }

        expect(changeSearchText(text)).toEqual(expectedAction)

    })

    test('should delete from array', () => {
        const id = 5;

        const expectedAction = {
            type: DELETE_FROM_MY_LIST,
            id
        }

        expect(deleteFromFavorites(id)).toEqual(expectedAction)
    })
})



