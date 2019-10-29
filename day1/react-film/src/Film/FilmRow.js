import React from 'react'

class FilmRow extends React.Component{
    render(){
        const {data} = this.props;
        const releaseDate = new Date(data.release_date);
        return(
            <div className="film-row">
                <img src={`https://image.tmdb.org/t/p/w780/${data.poster_path}`} alt="" />
                <div className="film-summary">
                    <h1>{data.title}</h1>
                    <p>{releaseDate.getFullYear()}</p>
                </div>
            </div>
        )
    }
}
export default FilmRow;