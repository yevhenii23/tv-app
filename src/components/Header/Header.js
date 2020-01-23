import React from 'react';
import { Component } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getSearchMovies } from '../../store/actions';

 class Header extends Component {

    state = {
        value: null,
    }

    handleClick = () => {
        this.props.search(this.state.value)

    }

    handleChange = (e) => {
        this.setState({value:e.target.value})
        console.log(e.target.value)
    }

    render () {
        const number = this.props.favoriteListLength;
        return <div className="header"> 
           <h1 className="text heading">TV-APP</h1>
           <div className="label">
            <Link to="/" className="link">Home</Link>
            <Link to="/mylist" className="link">My list:</Link>
            <span>{number}</span>  
            <input type="search" placeholder="Type to Search"  onChange={this.handleChange}></input>
            <input type="button" value="Search" onClick={this.handleClick}></input>
           </div>
        </div>
    }
}
const mapDispatchToProps = dispatch => ({
    search: (search) =>  dispatch(getSearchMovies(search))
});
const mapStateToProps = store => {
    return {
        favoriteListLength:store.movieList.favorites.length
    }      
    
}


export default connect (mapStateToProps,mapDispatchToProps)(Header);