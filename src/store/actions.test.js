import axios from 'axios';
import { ADD_TO_MY_LIST, DELETE_FROM_MY_LIST, CHANGE_SEARCH_TEXT, FETCH_MOVIE_LIST, FETCH_MOVIE_LIST_SUCCESS, addToFavorites, changeSearchText, deleteFromFavorites,fetchMovies } from './actions'

jest.mock('axios');

describe('Actions',() => {
  describe('#fetchMovies', () => {
    const list = [1,2,3];
    const dispatch = jest.fn();
    
    axios.get.mockResolvedValue({ data:  list})

    test('fetch movie list', async () => {
      const getState = jest.fn(() => ({
        searchText: null,
      }));

      await fetchMovies()(dispatch, getState);

      expect(getState).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({ type: FETCH_MOVIE_LIST });
      expect(axios.get).toHaveBeenCalledWith('http://api.tvmaze.com/shows');
      expect(dispatch).toHaveBeenCalledWith({ type: FETCH_MOVIE_LIST_SUCCESS, list });
    });    
  });

    // test('should create a action add to favorites', () => {
    //     const id = 3;

    //     const expectedAction = {
    //         type: ADD_TO_MY_LIST,
    //         id
    //     }

    //     expect(addToFavorites(id)).toEqual(expectedAction)

    // })

    // test('should change search text', () => {
    //     const text = 'aaa';

    //     const expectedAction = {
    //         type: CHANGE_SEARCH_TEXT,
    //         text
    //     }

    //     expect(changeSearchText(text)).toEqual(expectedAction)

    // })

    // test('should delete from array', () => {
    //     const id = 5;

    //     const expectedAction = {
    //         type: DELETE_FROM_MY_LIST,
    //         id
    //     }

    //     expect(deleteFromFavorites(id)).toEqual(expectedAction)
    // })
})



