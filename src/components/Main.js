import React from 'react';
import HornedBeast from './HornedBeast';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Main.css'


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showBeast: false,
            currentBeast: null
        }

        this.handleOpen = () => {
            console.log('handle')
            this.setState({ showBeast: true })
        }

        this.handleClose = () => {
            this.setState({ showBeast: false })
        }

        this.setBeast = () => {
            this.setState({ currentBeast: HornedBeast.Beast })
        }
    }

    
    // {
    //     "_id": 1,
    //     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    //     "title": "UniWhal",
    //     "description": "A unicorn and a narwhal nuzzling their horns",
    //     "keyword": "narwhal",
    //     "horns": 1
    //   }


    render() {
        return (
            <div className='main'>
                <Modal show={this.state.showBeast} onHide={this.handleClose}>
                    <Modal.Header closeButton>

                        <Modal.Title>this.state.currentBeast.title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src="" alt="this.state.currentBeast.image_url" />
                        <p>this.state.currentBeast.description</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose} >Close</Button>
                    </Modal.Footer>
                </Modal>
                {
                    this.props.BeastsArray.map(beast => {
                        return <HornedBeast
                            key={beast._id}
                            beast={beast}
                            handleOpen={this.handleOpen}
                        />
                    })
                }
            </div>
        )
    }
}

export default Main;