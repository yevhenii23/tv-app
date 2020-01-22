import React from 'react';
import { Component } from 'react';
import './Header.scss'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Header extends Component {

    state = {
        value: null,
        filterList: null,
    }
 
    handleClick = () => {
        axios.get(`http://api.tvmaze.com/search/shows?q=${this.state.value}`)
        .then(res => {
            console.log(res.data);
            this.setState({filterList:res.data})

        })
    }
    handleChange = (e) => {
        this.setState({value:e.target.value})
        console.log(e.target.value)
    }

    render () {
        let number = 1;
        return <div className="header"> 
           <h1 className="text heading">TV-APP</h1>
           <div className="label">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">My list:</Link>
            <span>{number}</span>  
            <input type="search" placeholder="Type to Search" onChange={this.handleChange}></input>
            <input type="button" value="Search" onClick={this.handleClick}></input>
           </div>
        </div>
    }
}

