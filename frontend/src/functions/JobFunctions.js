import axios from 'axios'

export const getJob = id => {
  return axios
    .get('/job/'+id)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateJob = (id, job) => {
  console.log(job)
  return axios
    .put('/job/'+id, {
      user_id: job.user_id,
      title: job.title,
      tag: job.tag,
      price: job.price,
      delivery: job.delivery,
      description: job.description,
      instruction: job.instruction,
      category_id: job.category_id
    })
    .then(response => {
      console.log(response)
      return response.data
    })
}

export const createJob = (job) => {
  console.log(job)
  return axios
    .post('/job/', {
      user_id: job.user_id,
      title: job.title,
      tag: job.tag,
      price: job.price,
      delivery: job.delivery,
      description: job.description,
      instruction: job.instruction,
      category_id: job.category_id
      
    })
    .then(response => {
      console.log(response)
      return response.data
    })
}