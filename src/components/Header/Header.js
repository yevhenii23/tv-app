import React from 'react';
import { Component } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getSearchMovies,getAllMovies } from '../../store/actions';

 class Header extends Component {

    state = {
        value: '',
    }
    componentDidMount () {
        let getInputValue = window.localStorage.getItem('setInputValue')
        this.setState({value:JSON.parse(getInputValue)})
    }
    componentDidUpdate () {
        let setInputValue = this.state.value;
        window.localStorage.setItem('setInputValue',JSON.stringify(setInputValue));

    }

    handleClick = () => {
        this.props.search(this.state.value)

    }

    handleChange = (e) => {
        this.setState({value:e.target.value})
    }

    handleClickHome = () => {
       this.props.getListOfMovies()

    }

    render () {
        const number = this.props.favoriteListLength;
        return <div className="header"> 
           <h1 className="text heading">TV-APP</h1>
           <div className="label">
            <Link to="/" className="link" onClick={this.handleClickHome}>Home</Link>
            <Link to="/mylist" className="link" onClick={this.handleMyList}>My list:</Link>
            <span>{number}</span>  
            <input type="search" placeholder="Type to Search"  value={this.state.value} onChange={this.handleChange}></input>
            <input type="button" value="Search" onClick={this.handleClick}></input>
           </div>
        </div>
    }
}
const mapDispatchToProps = dispatch => ({
    search: (search) =>  dispatch(getSearchMovies(search)),
    getListOfMovies: () => dispatch(getAllMovies()),
});
const mapStateToProps = store => {
    return {
        favoriteListLength:store.movieList.favorites.length,
        
    }      
    
}


export default connect (mapStateToProps,mapDispatchToProps)(Header);