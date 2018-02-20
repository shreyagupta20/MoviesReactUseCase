import React, {Component} from 'react';

export default class Dashboard extends Component {
    constructor (props)
    {
        super(props);
    }

    render () {
        return (
            <div>
                <h1> {this.props.movies[1].movie_title} </h1>
            </div>
        );
    }
}  
