import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Link } from 'react-router-dom'

import DatePicker from 'react-datepicker'

import jwt_decode from 'jwt-decode'
import { getUser, updateUser } from './../functions/UserFunctions'

class ProfileCurrent extends Component {
  constructor() {
    super()
    this.state = {
      isEditName: false,
      isEditEmail: false,
      isEditPhone: false,
      isEditBio: true,
      id: 0,
      name: '',
      alias: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      gender: 'Laki-laki',
      birth_date: '',
      created_date: '',
      profile_picture: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
  }

  onChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value })
  }

  onChangeDate(e) {
    this.setState({ birth_date: e })
  }

  onSubmit(e) {
    e.preventDefault()
    
    const user = {
      name: this.state.name,
      alias: this.state.alias,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      gender: this.state.gender,
      birth_date: this.state.birth_date,
    }

    updateUser(this.state.id,user).then(res => {
      console.log(res)
      this.setState({
        isEditName: false,
        isEditEmail: false,
        isEditPhone: false,
        isEditBio: false
      })
    })
  }

  componentDidMount() {

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    

    getUser(decoded.identity).then(res => {
      this.setState({
        id: res.id,
        name: res.name,
        alias: res.alias,
        email: res.email,
        phone: res.phone,
        address: res.address,
        city: res.city,
        birth_date: new Date(res.birth_date),
        created_date: new Date(res.created_date),
        profile_picture: res.profile_picture,
        errors: {}
      })
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
                <form noValidate onSubmit={this.onSubmit}>
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
                        <div>
                          <div className="form-group">
                            <label htmlFor="name">Nama Lengkap</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Nama"
                              value={this.state.name}
                              onChange={this.onChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="alias">Nama sebagai Pegawe</label>
                            <input
                              type="text"
                              className="form-control"
                              name="alias"
                              placeholder="Nama Lain"
                              value={this.state.alias}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      ) : ( 
                        <div className="form-group">
                          <label htmlFor="name">Nama Lengkap</label>
                          <p>{this.state.alias} <small>({this.state.name})</small></p>
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
                              name="gender"
                              value={this.state.gender} 
                              onChange={this.onChange}>
                              <option value="Laki-laki">Laki-laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </select>
                          </div>
                          <div className="form-group">
                        <label htmlFor="birth_date">Tanggal Lahir</label>
                        <DatePicker
                          className="form-control"
                          name="birth_date"
                          selected={this.state.birth_date}
                          placeholderText="Tanggal Lahir" 
                          dateFormat="yyyy-MM-dd"
                          onChange={this.onChangeDate}
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
                            <p>{this.state.birth_date.toLocaleDateString("id-ID",{ year: 'numeric', month: 'long', day: 'numeric'})} </p>
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
                </form>
              </div>
            </div>
          </div>
        </div>



      </div>
    )
  }

  
}

export default ProfileCurrent
