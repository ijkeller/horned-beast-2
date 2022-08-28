import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import OriginalBeastsArray from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showBeast: false,
      currentBeast: {},
      filteredBeasts: OriginalBeastsArray,
      searchFilter: OriginalBeastsArray,
    }
  }


handleOpen = (beast) => {
  this.setState({ showBeast: true });
  this.setState({ currentBeast: beast });
}

handleClose = () => {
  this.setState({ showBeast: false });
}

handleHornsChange = (event) => {
  let hornsNum = event.target.value;
  let hornsFilter = OriginalBeastsArray.filter(beast => {
    // eslint-disable-next-line
    return beast.horns == hornsNum
  })
  this.setState({ filteredBeasts: hornsFilter })
}

handleChange = (event) => {
  let search = event.target.value.toLowerCase();
  console.log(search)
  let searchFilter = this.state.filteredBeasts.filter(beast => {
    console.log(beast.title.toLowerCase())
    // eslint-disable-next-line
    return beast.title.toLowerCase() == search
  });
  console.log(searchFilter)
  this.setState({ filteredBeasts: searchFilter});
}

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({ filteredBeasts: this.state.searchFilter })
}

handleReset = (event) => {
  event.preventDefault();
  this.setState({ filteredBeasts: OriginalBeastsArray })
}

render() {
//   console.log(`------------ State Change --------`)
//   console.log(this.state.filteredBeasts)
//   console.log('----------------------------------')
  return (
    <div className="App">
      <Modal show={this.state.showBeast} onHide={this.handleClose} centered className='modal-card'>
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

      <Header handleChange={this.handleChange} handleHornsChange={this.handleHornsChange} handleSubmit={this.handleSubmit} handleReset={this.handleReset} />
      
      <Main filteredBeasts={this.state.filteredBeasts} handleOpen={this.handleOpen} />

      <Footer />
    </div>
  )
}
}

export default App;
