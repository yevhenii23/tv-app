import React from 'react';
import { Component } from 'react';
import './Header.scss'

export default class Header extends Component {

    render () {
        return <div className="header"> 
           <h1 className="text heading">TV-APP</h1>
           <div className="label">
            <input type="search" placeholder="Type to Search"></input>
            <input type="button" value="Search"></input>
           </div>
        </div>
    }
}

