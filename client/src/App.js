import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Headlines from './components/Headlines';
import Weatherdata from './components/lat_long'
//import Weatherdata from './components/weatherdata'

import { Provider } from 'react-redux';
import store from './store'

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Headlines" component={Headlines} />
            <Route exact path="/Weather" component={Weatherdata} />
          </div>
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App

