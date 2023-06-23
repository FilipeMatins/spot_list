const { Router } = require('express')

const userRouters = Router()

userRouters.post('/', (request, response) => {
  return response.json({ message: 'user created' })
})

userRouters.put('/', (request, response) => {
  return response.json({ message: 'user updated' })
})

userRouters.patch('/', (request, response) => {
  return response.json({ message: 'user updated' })
})

userRouters.get('/', (request, response) => {
  return response.json({ message: 'user listed' })
})

userRouters.delete('/', (request, response) => {
  return response.json({ message: 'user deleted' })
})

module.exports = userRouters
