import React, { Component } from 'react';
import LikesButton from './LikesButton';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: 0
        }

        this.incriment = (e) => {
            let nextState = {
                likes: this.state.likes + 1
            };
            this.setState(nextState)
        }
    
        this.decriment = (e) => {
            let nextState = {
                likes: this.state.likes - 1
            };
            this.setState(nextState)
        }
    }


    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <LikesButton prompt='+' handleClick={this.incriment} />
                        {`❤${this.state.likes}`}
                        <LikesButton prompt='-' handleClick={this.decriment} />
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeast;