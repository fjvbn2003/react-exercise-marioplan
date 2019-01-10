import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <switch>
            <Route path='/' component={Dashboard}/>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
