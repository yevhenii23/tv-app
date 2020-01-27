import React from 'react';
import { Component } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchMovies, changeSearchText } from '../../store/actions';


const Header = ({ favoritesLength, searchText, getMovies, changeSearch }) => (

    <div className="header"> 
        <h1 className="text heading">TV-APP</h1>
        <div className="label">
            <Link to="/" className="link">Home</Link>
            <Link to="/mylist" className="link">My list:</Link>
            <span>{favoritesLength}</span>  
            <input type="search" placeholder="Type to Search"  value={searchText} onChange={changeSearch}></input>
            <input type="button" value="Search" onClick={getMovies}></input>
        </div>
    </div>
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

export default connect (mapStateToProps,mapDispatchToProps)(Header);