import React from "react";
import {connect} from "react-redux"

class MovieDetailContainer extends React.Component {
    constructor(props){
        super(props);
    }
    

    render() {
        return (
            <div>
                <h1>Movie Detail container</h1>

                <p>Viewing movie {this.props.match.params.id}</p>
            </div>
        )
    }
}

const mapStateToProps = ({}) => {

}

export default connect(mapStateToProps)(MovieDetailContainer);