import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class HBForm extends React.Component {


    render() {
    return (
        <>
            <form onSubmit={this.props.submitHandler}>
                <Form.Select onChange={this.props.changeHandler}>
                    <option>Number of Horns</option>
                    <option value='1' >One Horn</option>
                    <option value='2' >Two Horns</option>
                    <option value='3' >Three Horns</option>
                </Form.Select>

                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" onChange={this.props.changeHandler} />
                </Form.Group>

                <Button variant="secondary" type="submit">Submit</Button>
            </form>
        </>
    )}
}

export default HBForm;