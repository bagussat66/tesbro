import axios from 'axios'

export const getCategory = id => {
  return axios
    .get('/category/'+id)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCategories = () => {
  return axios
    .get('/category')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
