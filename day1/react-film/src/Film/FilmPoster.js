import React from 'react'

class FilmPoster extends React.Component{
    render(){
        return(
            <img src={`https://image.tmdb.org/t/p/w780/${this.props.poster_path}`} alt="" />
        )
    }
}
export default FilmPoster;