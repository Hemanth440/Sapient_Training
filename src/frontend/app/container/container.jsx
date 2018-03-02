import React from 'react';
import './container.css'

export default class Container extends React.Component {

    render() {
        return (
            <div className="container">
                {this.props.view}
            </div>
        )
    }
}