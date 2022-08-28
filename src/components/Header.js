import React from 'react';
import HBForm from './HBForm';

class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <h1>Horned Beasts</h1>
                <HBForm changeHandler={this.props.handleChange} submitHandler={this.props.handleSubmit} handleHornsChange={this.props.handleHornsChange} handleReset={this.props.handleReset} />
            </div>
        )
    }
}

export default Header;