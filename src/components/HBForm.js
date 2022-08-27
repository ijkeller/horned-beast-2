import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class HBForm extends React.Component {


    render() {
        return (
            <>
                <Form onSubmit={this.props.submitHandler}>
                        <Form.Group >
                            <Form.Select id='horns-select' onChange={this.props.handleHornsChange}>
                                <option value="" >Number of Horns</option>
                                <option value={1} >One</option>
                                <option value={2} >Two</option>
                                <option value={3} >Three</option>
                                <option value={100} >One Hundred</option>
                            </Form.Select>
                            <Form.Control type="text" id='search' onChange={this.props.changeHandler} placeholder="Search" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">Submit</Button>
                        <Button variant="secondary" onClick={this.props.handleReset} >Reset</Button>
                </Form>
            </>
        )
    }
}

export default HBForm;