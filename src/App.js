import React, { Component } from 'react';
import './App.css';
import SearchEngine from './components/SearchEngine'
class App extends Component {
  constructor(props) {
    super(props)
  }

 

  render() {
    return (
      <div className="App">
        <h1>Choose your articles</h1>
        <SearchEngine></SearchEngine>
      </div>
    );
  }
}

export default App;
