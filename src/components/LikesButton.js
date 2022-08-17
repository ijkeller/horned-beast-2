import React from "react";
import Button from 'react-bootstrap/Button';

class LikesButton extends React.Component {
    render() {
        return (
            <Button variant="primary" onClick={this.props.handleClick}> {this.props.prompt} </Button>
        )
    }
}

export default LikesButton;