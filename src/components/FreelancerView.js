import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import jwt_decode from 'jwt-decode'
import { getProfile } from './UserFunctions'

class FreelancerView extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      city: '',
      birth_date: '',
      created_date: '',
      profile_picture: '',
      errors: {}
    }
  }

  componentDidMount() {
    

    getProfile(this.props.match.params.id).then(res => {
      this.setState({
        name: res.name,
        city: res.city,
        birth_date: res.birth_date,
        created_date: res.created_date,
        profile_picture: res.profile_picture
      })
      
    }) 
    
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.identity.name,
      city: decoded.identity.city,
      birth_date: decoded.identity.birth_date,
      created_date: decoded.identity.created_date,
      profile_picture: decoded.identity.profile_picture,
      errors: {}
    })
    
  }

  

  render() {
    return (
      <div className="container">
        <div className="jumbotron">

            <h1 className="text-center">Profil Pegawe</h1>

        </div>
          
        <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-8">
                  <div className="well well-sm">
                    <div className="row">
                        <div className="col-sm-6 col-md-2">
                          <img src="https://via.placeholder.com/150" alt="" className="img-rounded img-responsive" />
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <h4> {this.state.name}</h4>
                          <small>Pegawe Biasa </small>
                          <p>
                            <i className="glyphicon glyphicon-map-marker"></i> {this.state.city}
                            <br />
                            <i className="glyphicon glyphicon-gift"></i> {new Date(this.state.birth_date).toLocaleDateString("id-ID",{ year: 'numeric', month: 'long', day: 'numeric' })}
                            <br />
                            <i className="glyphicon glyphicon-briefcase"></i> {new Date(this.state.created_date).toLocaleDateString("id-ID",{ year: 'numeric', month: 'long', day: 'numeric' })}
                          </p>
                          <Route exact path="/profile/view" render={() => 
                            <Link to="profile/edit"
                              className="btn btn-sm btn-primary btn-block"
                            >
                              Edit Profil
                            </Link>}
                          />
                        </div>
                        
                    </div>
                  </div>
              </div>
            </div>
          </div>



      </div>
    )
  }

  
}

export default FreelancerView
