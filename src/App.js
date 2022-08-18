import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import BeastsArray from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main BeastsArray={BeastsArray} />
      <Footer />
    </div>
  );
}

export default App;
