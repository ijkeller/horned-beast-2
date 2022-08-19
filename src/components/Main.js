import React from 'react';
import HornedBeast from './HornedBeast';
import HBForm from './HBForm';
import './Main.css'


class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            BeastsArray: this.props.BeastsArray
        }
    }

    handleChange = (event) => {
        let filter = event.target.value.toLowerCase()
        let filteredHorns = this.props.BeastsArray.horns.filter( b => b.includes(filter) )
        let filteredListOfBeasts = this.props.BeastsArray.title.filter( b => b.includes(filter) )
        this.setState({ BeastsArray: filteredHorns})
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <div className='main'>
                <HBForm changeHandler={this.handleChange} submitHandler={this.handleSubmit} />
                {
                    this.state.BeastsArray.map(beast => {
                        return <HornedBeast
                            key={beast._id}
                            beast={beast}
                            handleOpen={() => this.props.handleOpen(beast)}
                        />
                    })
                }
            </div>
        )
    }
}

export default Main;