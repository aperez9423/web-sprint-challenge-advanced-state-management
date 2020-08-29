import React, { Component } from "react";

import SmurfForm from '../components/smurfForm';
import SmurfList from '../components/smurfList';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
