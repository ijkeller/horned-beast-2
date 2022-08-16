import React, { Component } from 'react';

class HornedBeast extends Component {

    constructor(props){
        super(props);
    }

    render() {
    return (
        <div className='horned-beast'>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageUrl} alt={this.props.title} />
            <p>{this.props.description}</p>
        </div>
    )}
}

export default HornedBeast;