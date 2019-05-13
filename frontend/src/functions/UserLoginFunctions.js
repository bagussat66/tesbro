import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const register = newUser => {
  return axios
    .post('user/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('user/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log(jwt_decode(response.data).identity)
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

