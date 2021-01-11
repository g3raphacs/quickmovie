import React, { Component } from 'react';
import { Poster } from './Poster';

import '../css/PosterList.css'

class PosterList extends Component{
    renderPoster = () => {
        return this.props.movies.map(movie =>{
            const imgSrc = movie.poster_path;
            const whish = false;
            return (
                <Poster 
                    key={movie.id}
                    imgSrc={imgSrc}
                    whished={whish}
                    movie={movie}
                    mTitle={movie.title}
                    mDesc={movie.overview}
                />
            )
        })
    }

    render(){
        return(
            <div className="posterList">
                <h3 className="posterList--title">Nouveautés</h3>
                <div className="posterList--grid">
                    {this.renderPoster()}
                </div>
            </div>
        )
    }
}

export { PosterList };