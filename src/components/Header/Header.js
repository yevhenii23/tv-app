import React from 'react';
import { Component } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getSearchMovies } from '../../store/actions';

 class Header extends Component {

    state = {
        value: '',
    }
    componentDidMount () {
        let getInputValue = window.localStorage.getItem('setInputValue')
        console.log('currentinputvalue',getInputValue)
        this.setState({value:JSON.parse(getInputValue)})
    }
    componentDidUpdate () {
        let setInputValue = this.state.value;
        let setItem = window.localStorage.setItem('setInputValue',JSON.stringify(setInputValue));
        console.log(setItem)

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
            <input type="search" placeholder="Type to Search"  value={this.state.value} onChange={this.handleChange}></input>
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