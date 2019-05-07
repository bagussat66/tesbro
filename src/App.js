import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import ProfileCurrent from './components/ProfileCurrent'
import FreelancerView from './components/FreelancerView'
import JobsNew from './components/JobsNew'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={ProfileCurrent} />
            <Route exact path="/jobs/new" component={JobsNew} />
            <Route exact path="/freelancer/:id" component={FreelancerView} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
