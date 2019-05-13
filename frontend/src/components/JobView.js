import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import jwt_decode from 'jwt-decode'

import { getJob } from './../functions/JobFunctions'
import { getCategory } from './../functions/CategoryFunctions'

class JobView extends Component {
  constructor() {
    super()
    this.state = {

      title: ' ',
      category_id: 0,
      category_name: '',
      tag:'',
      price: '',
      created_date: '',
      delivery: '',
      description: '',
      instruction: '',
      user_id: 0,
      cover_picture: '',
      categories: [],
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value })

    console.log(e.target)
    console.log(this.state.delivery)
  }
  onSubmit(e) {
    e.preventDefault()
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      user_id: decoded.identity
    })

    getJob(this.props.match.params.id).then(res => {
      console.log(res)
      this.setState({
        title: res.title,
        category_id: res.category_id,
        tag: res.tag,
        price: res.price,
        created_date: res.created_date,
        delivery: res.delivery,
        description: res.description,
        instruction: res.description,
        cover_picture: res.cover_picture,
        user_id: res.user_id,
      })
      getCategory(res.category_id).then(res2 => {
        this.setState({
          category_name: res2.name,
        })
      })
      
    }) 
    
  }


  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="well">
              <form noValidate onSubmit={this.onSubmit}>
                <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.category_name}</p>
                    <div>
                        
                        
                        
                        <div className="form-group">
                          <label htmlFor="price">Harga</label>
                          <p>Rp {this.state.price},-</p>
                        </div>
                        <div className="form-group">
                          <label htmlFor="delivery">Lama Penyampaian</label>
                          <p>{this.state.delivery} Hari</p>
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">Deskripsi Pekerjaan</label>
                          <p>{this.state.description}</p>
                        </div>
                        <div className="form-group">
                          <label htmlFor="instruction">Instruksi Pembeli</label>
                          <p>{this.state.instruction}</p>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="images">Gambar</label>
                          <img 
                            src="https://via.placeholder.com/150" 
                            className="img-rounded img-responsive" 
                          />
                        </div>
                        <div className="form-group">
                          <small>Tag : {this.state.tag}</small>
                        </div>
                      </div>
                  </div>
                  <hr/>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  
}

export default JobView
