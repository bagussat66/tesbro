import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import ProfileCurrent from './components/ProfileCurrent'
import FreelancerView from './components/FreelancerView'
import JobNew from './components/JobNew'
import JobView from './components/JobView'
import JobEdit from './components/JobEdit'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Landing} />    
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={ProfileCurrent} />
            <Route exact path="/job/new" component={JobNew} />
            <Route exact path="/job/view/:id" component={JobView} />
            <Route exact path="/job/edit/:id" component={JobEdit} />
            <Route exact path="/freelancer/:id" component={FreelancerView} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
