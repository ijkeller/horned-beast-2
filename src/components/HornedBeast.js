import React, { Component } from 'react';
import LikesButton from './LikesButton';
import Card from 'react-bootstrap/Card';
import './HornedBeasts.css'

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
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img variant="top" onClick={this.props.handleOpen} src={this.props.beast.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.beast.title}</Card.Title>
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