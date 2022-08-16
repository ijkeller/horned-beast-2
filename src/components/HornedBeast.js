import React, { Component } from 'react';
import Button from './Button'

class HornedBeast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: 0
        }

    }

    incriment = (e) => {
        console.log('inc')
        let nextState = {
            likes: this.state.likes + 1
        };
        this.setState(nextState)
        console.log(this.state.likes)
    }

    decriment = (e) => {
        console.log('dec')
        let nextState = {
            likes: this.state.likes - 1
        };
        this.setState(nextState)
        console.log(this.state.likes)
    }

    render() {
        return (
            <div className='horned-beast'>
                <h2>{this.props.title}</h2>
                <img src={this.props.image} alt={this.props.title} />
                <Button prompt='+' handleClick={this.incriment} />
                {`❤${this.state.likes}`}
                <Button prompt='-' handleClick={this.decriment} />
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;