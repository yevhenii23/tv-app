import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchMovies, changeSearchText } from '../../store/actions';

const Header = ({ favoritesLength, searchText, getMovies, changeSearch }) => (

    <header data-test="header-test" className="header"> 
        <h1 data-test="h1-logo-test" className="text heading">TV-APP</h1>
        <div data-test="wraper-label-test" className="label">
            <Link data-test="link-to-home-test" to="/" className="link">Home</Link>
            <Link data-test="link-to-myList" to="/mylist" className="link">My list:</Link>
            <span data-test="counter-test">{favoritesLength}</span>  
            <input data-test="search-test" type="search" placeholder="Type to Search"  value={searchText} onChange={changeSearch} className="search-input"></input>
            <input data-test="search-button-test" type="button" value="Search" onClick={getMovies} className="button-input"></input>
        </div>
    </header>
);


const mapStateToProps = ({ favorites, searchText }) => {
    return {
        favoritesLength: favorites.length,
        searchText: searchText,
    }
}

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(fetchMovies()),
    changeSearch: (e) => dispatch(changeSearchText(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);