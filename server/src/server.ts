import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  response.send({
    name : 'felps'
  })
})

app.listen(3333)
