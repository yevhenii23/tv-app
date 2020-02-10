import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { fetchMovies } from '../../store/actions';


// замена того что прилетит с импорта на подельный код мока
jest.mock('react-redux', () => {
    const dispatch = jest.fn();
    const state = { 
        favorites: [1,2,3,4,5],
        searchText: 'aaa' 
    };
    const mockConnect = (mapState, mapDispatch) => (Component) => (ownProps) => {
        const props = {
            ...ownProps,
            ...(mapState(state)),
            ...(mapDispatch(dispatch))
        };
        return <Component {...props}/>   
    }
    return {
        connect: mockConnect,
    }; 
});
jest.mock('../../store/actions');

describe('Header component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />).dive();
    });

    test('render without errors', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('calls getMovies on search button click ', () => {
        wrapper.find('input.button-input').simulate('click');
        expect(fetchMovies).toHaveBeenCalled();
    })
});