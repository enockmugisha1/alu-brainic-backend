
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const users =[{
  id: 1,
  name: 'Enock'
}, {
  id: 2,
  name: 'Doe'
}]
app.get('/users', (req, res) => {
  res.json(users)
}
)
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))
  if (user) {
    res.json(user)
  } else {
    res.status(404).send('User not found')
  }
}
)
app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  }
  users.push(user)
  res.json(user)
}
)
app.put('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))
  if (user) {
    user.name = req.body.name
    res.json(user)
  } else {
    res.status(404).send('User not found')
  }
})

app.get('/', (req, res) => {
  res.send('Hello !')
})
app.delete('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))
  if (user) {
    const index = users.indexOf(user)
    users.splice(index, 1)
    res.json(user)
  } else {
    res.status(404).send('User not found')
  }
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
