import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import jwt_decode from 'jwt-decode'
import { getProfile } from './ProfileFunctions'

class ProfileView extends Component {
  constructor() {
    super()
    this.state = {
      isEditName: false,
      isEditEmail: false,
      isEditPhone: false,
      isEditBio: true,
      name: '',
      email: '',
      phone: '',
      address: '',
      birth_date: '',
      created_date: '',
      profile_picture: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value })
  }
  onSubmit(e) {
    e.preventDefault()
  }

  componentDidMount() {

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.identity.name,
      email: decoded.identity.email,
      phone: decoded.identity.phone,
      address: decoded.identity.address,
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
            <h1 className="text-center">Profil Pengguna</h1>
        </div>
          
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="well well-sm">
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group">
                      <h2>Informasi Kontak</h2>
                      <label>Foto Profil </label>
                      <img 
                        src="https://via.placeholder.com/150" 
                        className="img-rounded img-responsive" 
                      />
                    </div>
                    <hr/>
                    {this.state.isEditName ? ( 
                      <div className="form-group">
                        <label htmlFor="name">Nama</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Nama"
                          value={this.state.name}
                          onChange={this.onChange}
                        />
                      </div>
                    ) : ( 
                      <div className="form-group">
                        <label htmlFor="name">Nama</label>
                        <p>{this.state.name}</p>
                      </div>
                    )}
                    <p className="text-right">
                      Edit? 
                      <input
                        name="isEditName"
                        type="checkbox"
                        checked={this.state.isEditName}
                        onChange={this.onChange} />
                    </p>

                    <hr/>
                    {this.state.isEditEmail ? ( 
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </div>
                    ) : ( 
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <p>{this.state.email}</p>
                      </div>
                    )}
                    
                    <p className="text-right">
                      Edit? 
                      <input
                        name="isEditEmail"
                        type="checkbox"
                        checked={this.state.isEditEmail}
                        onChange={this.onChange} />
                    </p>
                    <hr/>
                    {this.state.isEditPhone ? ( 
                      <div className="form-group">
                        <label htmlFor="phone">HP</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Nomor HP"
                          value={this.state.phone}
                          onChange={this.onChange}
                        />
                      </div>
                    ) : ( 
                      <div className="form-group">
                        <label htmlFor="phone">HP</label>
                        <p>{this.state.phone}</p>
                      </div>
                    )}
                    <p className="text-right">
                      Edit? 
                      <input
                        name="isEditPhone"
                        type="checkbox"
                        checked={this.state.isEditPhone}
                        onChange={this.onChange} />
                    </p>
                        
                    <hr/>
                    <h2>Data Diri (sesuai KTP)</h2>

                    {this.state.isEditBio ? ( 
                      <div>
                        <div className="form-group">
                          <label htmlFor="address">Alamat</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Alamat"
                            value={this.state.address}
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="city">Kota</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            placeholder="Kota"
                            value={this.state.city}
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="gender">Jenis Kelamin</label>
                          <select 
                            className="form-control"
                            value={this.state.gender} 
                            onChange={this.onChange}>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                          </select>
                        </div>
                        <div className="form-group">
                      <label htmlFor="birth_date">Tanggal Lahir</label>
                      <input
                        type="birth_date"
                        className="form-control"
                        name="birth_date"
                        placeholder="Tanggal Lahir"
                        value={this.state.birth_date}
                        onChange={this.onChange}
                      />
                    </div>
                      </div>
                    ) : ( 
                      <div>
                        <div className="form-group">
                          <label htmlFor="address">Alamat</label>
                          <p>{this.state.address}</p>
                        </div>
                        <div className="form-group">
                          <label htmlFor="city">Kota</label>
                          <p>{this.state.city}</p>
                        </div>
                        <div className="form-group">
                          <label htmlFor="gender">Jenis Kelamin</label>
                          <p>{this.state.gender}</p>
                        </div>
                        <div className="form-group">
                          <label htmlFor="birth_date">Tanggal Lahir</label>
                          <p>{this.state.birth_date}</p>
                        </div>
                      </div>
                    )}
                    <p className="text-right">
                      Edit? 
                      <input
                        name="isEditBio"
                        type="checkbox"
                        checked={this.state.isEditBio}
                        onChange={this.onChange} />
                    </p>
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



      </div>
    )
  }

  
}

export default ProfileView
