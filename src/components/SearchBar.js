import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import '../css/SearchBar.css';

class SearchBar extends Component{
    render(){
        return(
            <div className="searchBar--container">
                <div className="searchBar">
                    <input
                        className="searchBar--input"
                        type="text"
                        placeholder="Rechercher"
                    />
                    <div className="searchBar--submit">
                    <FontAwesome className="header--search" name="search" size="2x"/>
                    </div>
                </div>
            </div>
        )
    }
}

export { SearchBar };