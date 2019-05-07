import axios from 'axios'

export const getProfile = id => {
  return axios
    .get('/users/profile/'+id)
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const saveProfile = (id, user) => {
  return axios
    .post('users/update', {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      gender: user.gender,
      birth_date: user.birth_date
    })
    .then(response => {
      console.log(user)
    })
}