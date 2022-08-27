import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'


class Main extends React.Component {

    render() {
        return (
            <div className='main'>
                {
                    this.props.filteredBeasts.map(beast => {
                        return <HornedBeast
                            key={beast._id}
                            beast={beast}
                            handleOpen={this.props.handleOpen}
                        />
                    })
                }
            </div>
        )
    }
}

export default Main;