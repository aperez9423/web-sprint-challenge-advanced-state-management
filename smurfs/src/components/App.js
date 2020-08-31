import React, { Component } from "react";
import styled from 'styled-components'

import SmurfForm from '../components/smurfForm';
import SmurfList from '../components/smurfList';

import "./App.css";

class App extends Component {
  render() {
    return (
          <div className="App">
            <Title>Smurf Village</Title>
              <SmurfForm/>
              <SmurfList/>
          </div>
    );
  }
}

export default App;

const Title = styled.h1 `
  background-color: blue;
  color: white;
  font-family: Londrina Solid;
  font-weight: bolder;
  font-size: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1rem solid black;
  border-bottom: 1rem solid black;
`
