import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class MovieDetailContainer extends React.Component {
    constructor(props){
        super(props);
    }
    

    render() {
        const movieIndex = this.props.match.params.id;
        var {movies} = this.props;
        movies = movies[movieIndex];
        
        return (
            <div>
                <h1 className="neon text-center py-3">Movie Detail container</h1>
                
                    <div className="container-fluid">
                        <Link to="/" className="btn btn-primary my-3">Back to search results</Link>
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="card-img" src={movies.Poster} alt="Card image cap" />
                            </div>
                            <div className="col-sm-7">
                                <div className="searchBtnParent card cardBg2 border border-info">
                                    <div className="card-header alert alert-primary">Movie Details</div>
                                    <div className="searchBtnParent card-body">
                                        <h3 className="card-title font-weight-bold"><a href={`http://www.imdb.com/title/${movies.imdbID}`} target="_blank">{movies.Title}</a></h3>
                                        <div className="container">
                                            <div className="row justify-content-between">
                                                <div className="p-1 text-white bg-success rounded">  Released {movies.Released}  </div>
                                                <div className="p-1 text-white bg-success rounded">{movies.Runtime}</div>
                                                <div className="p-1 text-white bg-success rounded">{movies.Genre}</div>
                                            </div>
                                        </div>
                                        <hr className="bg-dark" />
                                        <p className="card-text">{movies.Plot}</p>
                                        <p className="card-text mb-0"><span className="font-weight-bold">Awards and Nominations:</span> {movies.Awards}</p>
                                        <p className="card-text mb-0"><span className="font-weight-bold">Metascore:</span> {movies.Metascore}/100</p>
                                        <p className="card-text mb-0"><span className="font-weight-bold">IMDB:</span> {movies.imdbRating}/10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

const mapStateToProps = ({search}) => ({
        movies: search.movies
})

export default connect(mapStateToProps)(MovieDetailContainer);