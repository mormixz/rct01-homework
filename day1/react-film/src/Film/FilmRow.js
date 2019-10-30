import React from 'react'
import FilmPoster from './FilmPoster'
class FilmRow extends React.Component{
    render(){
        const {data} = this.props;
        const releaseDate = new Date(data.release_date);
        return(
            <div className="film-row">
                <FilmPoster poster_path={data.poster_path}/>
                
                <div className="film-summary">
                    <h1>{data.title}</h1>
                    <p>{releaseDate.getFullYear()}</p>
                </div>
            </div>
        )
    }
}
export default FilmRow;