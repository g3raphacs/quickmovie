import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMovie, removeMovie } from '../actions/movie'

import '../css/Poster.css'

class PosterComponent extends Component {
    state = {
        hover: false
    }

    showOverlay = () => {
        if(!this.state.hover){
            this.setState({ hover: true})
        }
    }
    hideOverlay = () => {
        if(this.state.hover){
            this.setState({ hover: false})
        }
    }
    add = () => {
        //implementer avec Redux
        this.props.addM(this.props.movie);
        console.log('add to wishlist')
    }
    remove = () => {
        //implementer avec Redux
        this.props.removeM(this.props.id);
        console.log('remove from wishlist')
    }

    render(){
        const lastFour = this.props.imgSrc.substr(this.props.imgSrc.length - 4)
        if(lastFour === "null"){
                return null;
        }
        return(
            
            <div
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                className="poster"
            >
                <img className="poster--img hovered" src={this.props.imgSrc}/>
                {this.state.hover ? (
                    <div className="poster--overlay">
                        <Link className="poster--overlay_link" to={{ pathname: `/${this.props.id}`}}></Link>
                        {this.props.whished ? (
                            <FontAwesome onClick={this.remove} className="poster--icon" name="heart" size="2x"/>
                            ) : (
                            <FontAwesome onClick={this.add} className="poster--icon-no" name="heart-o" size="2x"/>
                            )}
                    </div>
                ): null}
            </div>
        )
    }

}
const mapDispatchToProps = dispatch => {
    return {
        addM: movie => dispatch(addMovie(movie)),
        removeM: movieId => dispatch(removeMovie(movieId))
    }
}
const Poster = connect(null,mapDispatchToProps)(PosterComponent);

export { Poster }