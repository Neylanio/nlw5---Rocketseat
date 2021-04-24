import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({message: "ok"})
})

app.post('/:user', (request, response) => {
  return response.json({
   message: `usuario ${request.params.user} salvo com sucesso` 
  })
})

app.listen(3333, () => {
  console.log('server is runnning on port 3333')
})