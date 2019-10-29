import React from 'react'
import FilmRow from './FilmRow';

class FilmListing extends React.Component{
    render(){
        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {this.props.films.map((data)=>
                    <FilmRow key={data.id} data={data}/>
                )}
            </div>
        );
    }
}
export default FilmListing;