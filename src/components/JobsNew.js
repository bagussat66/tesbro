import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import jwt_decode from 'jwt-decode'
class JobsNew extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: '1',
      title: 'Saya bersedia ',
      category_id: '',
      tag:'',
      price: 100000,
      created_date: '',
      delivery: 3,
      description: '',
      instruction: '',
      user_id: 0,
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
      user_id: decoded.identity.id
    })
  }

  categoryOptions = () => {
    let options = []

    this.state.categories.forEach(function (category){
      options.push(<option value={category.id}>{category.name}</option>)
    })

    return options
  }

  deliveryOptions = () => {
    let options = []

    for (let i = 0; i <= 30; i++) {
      options.push(<option value={i}>{i} hari kerja</option>)
    }

    return options
  }

  render() {
    if (this.state.pageNo==1) {
      
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="well">
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <h2>Gawe Baru</h2>
                    <div>
                        <div className="form-group">
                          <label htmlFor="title">Judul</label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Saya bersedia ..."
                            value={this.state.title}
                            onChange={this.onChange}
                          />
                          <small>Contoh: Saya bersedia mengajar matematika online</small>
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="category_id">Kategori</label>
                          <select 
                            className="form-control"
                            name="category_id"
                            value={this.state.category_id} 
                            onChange={this.onChange}>
                            {this.categoryOptions()}
                          </select>
                        </div>
                        
                        
                        <div className="form-group">
                          <label htmlFor="price">Harga</label>
                          <select 
                            className="form-control"
                            name="price"
                            value={this.state.price} 
                            onChange={this.onChange}>
                            <option value="50000">Rp 50.000,-</option>
                            <option value="100000">Rp 100.000,-</option>
                            <option value="150000">Rp 150.000,-</option>
                            <option value="200000">Rp 200.000,-</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="delivery">Lama Penyampaian</label>
                          <select 
                            className="form-control"
                            name="delivery"
                            value={this.state.delivery} 
                            onChange={this.onChange}>
                            {this.deliveryOptions()}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">Deskripsi Pekerjaan</label>
                          <textarea
                            className="form-control"
                            name="description"
                            placeholder="Deskripsi pekerjaan yang anda tawarkan..."
                            value={this.state.description}
                            onChange={this.onChange}
                          />
                          <small>Catatan: Pastikan mencantumkan lingkup jasa dan penagihan</small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="instruction">Instruksi Pembeli</label>
                          <textarea
                            className="form-control"
                            name="instruction"
                            placeholder="Instruksi khusus yang anda berikan kepada calon pembeli..."
                            value={this.state.instruction}
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="tag">Tag</label>
                          <input
                            type="text"
                            className="form-control"
                            name="tag"
                            placeholder="Misal: unik, baru, teknologi"
                            value={this.state.tag}
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="images">Gambar</label>
                          <img 
                            src="https://via.placeholder.com/150" 
                            className="img-rounded img-responsive" 
                          />
                        </div>
                      </div>
                  </div>
                  <hr/>

                  
                  <button
                    type="submit"
                    className="btn btn-md btn-primary"
                  >
                    Simpan
                  </button>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  
}

export default JobsNew
