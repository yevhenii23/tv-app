import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { initialState, movieReducer } from '../../store/movieReducer';
import { createStore } from 'redux';

const storeFactory = (initialState) => {
    return createStore(movieReducer, initialState);
}

const findByTestAttr = (wraper, value) => {
    return wraper.find(`[data-test="${value}"]`)
}
 


const setup  = (initialState = {}) => {
    const store = storeFactory()
    const wraper = shallow(<Header store={store}/>).dive().dive();
    // console.log(wraper.debug())
    return wraper;
}

// setup()

describe('Header component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            list: [],
            searchText: '',
            favorites: [],
            loading: false,
        }
        wrapper = setup(initialState);

    })
    test('renders header component without error', () => {
        const component = findByTestAttr(wrapper,"header-test");
        expect(component.length).toBe(1);
    })

    test('renders h1-logo-test without error', () => {
        const heading = findByTestAttr(wrapper,"h1-logo-test");
        expect(heading.length).toBe(1);
    })

    test('render wraper-label-test without error', () => {
        const wrapperLabel = findByTestAttr(wrapper,"wraper-label-test");
        expect(wrapperLabel.length).toBe(1);

    })

    test('render link-to-home-test without error', () => {
        const linkHome = findByTestAttr(wrapper,"link-to-home-test");
        expect(linkHome.length).toBe(1);

    })

    test('render link-to-myList without error', () => {
        const linkMyList = findByTestAttr(wrapper,"link-to-myList")
        expect(linkMyList.length).toBe(1);
    })

    test('test click event search-button-test',() => {
        const getMovies = jest.fn();
        const searchButton =  findByTestAttr(wrapper,"search-button-test").simulate('click');
        expect(searchButton.length).toBe(0)
        expect(getMovies.mock.calls.length).toEqual(0);

    })


});