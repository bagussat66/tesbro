import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { getCategories } from './../functions/CategoryFunctions'

class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      search: '',
      categories: [],
      errors: {}
    }
  }

  componentDidMount() {
    getCategories().then(res => {
      this.setState({
        categories: res
      })
    })
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  categoryLink = () => {
    let options = []
    
    this.state.categories.forEach(function (c){
      const link = "/category/"+c.id
      options.push(<li><Link to={link}>{c.name}</Link></li>)
    })
    return options
    
    

    
  }

  render() {

    
   
    return (

      <header>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-xs-6 col-sm-3">
                    <Link to="/" className="logo">
                        <img src="/images/logo.png" alt=""/>
                    </Link>
                </div>
                <div className="col-md-6 col-xs-6 col-sm-6">
                    <div className="menu">
                        <nav className="navbar navbar-default" >
                            <div className="container-fluid">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="search"
                                      placeholder="Apa yang anda ingin orang lain kerjakan ..."
                                      value={this.state.search}
                                      onChange={this.onChange}
                                    />
                                    
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12 col-sm-3">
                  <div className="menu">
                    <nav className="navbar navbar-default" >
                      <div className="container-fluid">
                        {localStorage.usertoken ? ( 
                          <ul className="nav navbar-nav">
                            <li><Link to="/profile">
                              Akun
                            </Link></li>
                            <li><Link to="" onClick={this.logOut.bind(this)}>
                              Logout
                            </Link></li>
                          </ul>
                        ) : (
                          <ul className="nav navbar-nav">
                            <li><Link to="/login">
                              Login
                            </Link></li>
                            <li><Link to="/register">
                              Daftar
                            </Link></li>
                          </ul>
                        )}
                      </div>
                    </nav>
                  </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12">
                    <div className="menu">
                        <nav className="navbar navbar-default" >
                            <div className="container-fluid">
                              <ul className="nav navbar-nav">
                                <li><Link to="/">Halaman Depan</Link></li>
                                {this.categoryLink()}
                              </ul>
                                  
                            </div>
                        </nav>
                    </div>
                </div>
                
            </div>
        </div>
    </header>

    )
  }
}

export default withRouter(Navbar)
