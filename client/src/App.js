import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store'
import Headlines from './components/Headlines';
import Weatherdata from './components/lat_long'
import Navbar from './components/Navbar'
import Landing from "./pages/landing";
import Profile from "./pages/profile";
import NoMatch from "./pages/NoMatch";;

//import Weatherdata from './components/weatherdata'




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
            <Route exact path="/user" component={Profile} />
            <Route exact path="/Headlines" component={Headlines} />
            <Route exact path="/Weather" component={Weatherdata} />
            <Route component={NoMatch} />
          </div>
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App

