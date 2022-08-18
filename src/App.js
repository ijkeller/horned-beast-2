import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import BeastsArray from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showBeast: false,
      currentBeast: {}
    }
  }


handleOpen = (beast) => {
  console.log('handle')
  this.setState({ showBeast: true })
  this.setState({ currentBeast: beast })
}

handleClose = () => {
  this.setState({ showBeast: false })
}




render() {
  return (
    <div className="App">
      <Modal show={this.state.showBeast} onHide={this.handleClose}>
        <Modal.Header closeButton>

          <Modal.Title>{this.state.currentBeast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={this.state.currentBeast.image_url} alt={this.state.currentBeast.title} />
          <p>{this.state.currentBeast.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose} >Close</Button>
        </Modal.Footer>
      </Modal>

      <Header />

      <Main BeastsArray={BeastsArray} handleOpen={this.handleOpen} />

      <Footer />
    </div>
  )
}
}

export default App;
