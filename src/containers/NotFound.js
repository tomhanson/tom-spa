import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {
    componentDidMount() {
        this.props.toggleLoader();
    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }
    render() {
        return (
            <div className="absolute-center">
                <h1>Nothing to see here! <Link to="/">Go Home?</Link></h1>
            </div>
        );
    }
}
export default NotFound;