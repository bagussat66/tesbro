import axios from 'axios'

export const getUser = id => {
  return axios
    .get('/user/'+id)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateUser = (id, user) => {
  return axios
    .put('/user/'+id, {
      name: user.name,
      alias: user.alias,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      gender: user.gender,
      birth_date: user.birth_date
    })
    .then(response => {
      console.log(response.data)
      return response.data
    })
}