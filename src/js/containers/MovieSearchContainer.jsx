import React from "react";
import { connect } from "react-redux";

import {
    searchBtn
} from "../actions/movieSearchActions";

class MovieSearchContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            input: ""
        }

        this.handleUpdateInput = this.handleUpdateInput.bind(this);
        this.handleSearchBtn = this.handleSearchBtn.bind(this);
    }

    handleUpdateInput(e){
        let input = e.target.value;
        this.setState({
            input
        });
    }

    handleSearchBtn(e){
        const {dispatch} = this.props;
        let {input} = this.state;
        dispatch(searchBtn(input));
        document.getElementById("form").reset();
        this.setState({
            input: ""
        })
    }

    render() {
        const {movies} = this.props;
        return (
            <div>
                <h1 className="text-center py-3">Movie Finder</h1>
                <form id="form">
                    <div className="form-row">
                        <div className="col">
                            <div className="input-group">
                                <input onChange={this.handleUpdateInput} type="text" className="form-control" id="movieSearch" placeholder="Enter movie" />
                                <button onClick={this.handleSearchBtn} type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>

                {movies.length > 0 && movies.map(movie => {
                    return (
                        <div key={movie.imdbID} className="my-3">
                            <div className="card">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <img className="card-img p-3" src={movie.Poster} alt="Card image cap" />
                                        </div>
                                        <div className="col-sm-9  pl-0">
                                            <div className="cardSize pl-0">
                                                <div className="card-body pl-0 text-right">
                                                    <h3 className="card-title text-left"><a href="#">{movie.Title}</a></h3>
                                                    <p className="text-left">{movie.Year}</p>
                                                    <hr className="bg-dark" />
                                                    <p className="card-text text-left">{movie.Plot}</p>
                                                    <a href="#" className="align-bottom btn btn-primary">{movie.Title} Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ search }) => ({
    movies: search.movies
})

export default connect(mapStateToProps)(MovieSearchContainer);