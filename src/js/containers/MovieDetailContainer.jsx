import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class MovieDetailContainer extends React.Component {
    constructor(props){
        super(props);
    }
    

    render() {
        const movieIndex = this.props.match.params.id;

        const {movies} = this.props;

        return (
            <div>
                <h1>Movie Detail container</h1>
                <Link to="/" className="btn btn-primary">Back to search</Link>
                <p>MovieIndex {movieIndex}</p>
                <p>MovieFromIndex{movies[movieIndex].Title}</p>

            </div>
        )
    }
}

const mapStateToProps = ({search}) => ({
        movies: search.movies
})

export default connect(mapStateToProps)(MovieDetailContainer);