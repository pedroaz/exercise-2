const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

const Calculator = require("./calc-lib");

app.use(cors())

const calculadora = new Calculator();


app.get('/soma', (req, res) => {
  const x1 = req.query.x
  const y1 = req.query.y
  const y = parseInt(y1)
  const x = parseInt(x1)
  const resultado = calculadora.soma(x,y)
  res.send({resultado})
})

app.get('/sub', (req, res) => {
  const x1 = req.query.x
  const y1 = req.query.y
  const y = parseInt(y1)
  const x = parseInt(x1)
  const resultado = calculadora.subtracao(x,y)
  res.send({resultado})
})

app.get('/div', (req, res) => {
  const x1 = req.query.x
  const y1 = req.query.y
  const y = parseInt(y1)
  const x = parseInt(x1)
  const resultado = calculadora.divisao(x,y)
  res.send({resultado})
})

app.get('/multi', (req, res) => {
  const x1 = req.query.x
  const y1 = req.query.y
  const y = parseInt(y1)
  const x = parseInt(x1)
  const resultado = calculadora.multiplicacao(x,y)
  res.send({resultado})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})