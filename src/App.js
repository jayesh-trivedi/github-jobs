import React, { Component } from 'react';
import { Router } from 'react-router';
import './App.css';
import Route from './router'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {  }
  render() {

    return (
    <BrowserRouter>
    <Route />
    </BrowserRouter>);
  }
}
 
export default App;
