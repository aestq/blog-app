const fs = require('fs')
const path = require('path')
const jsonServer = require('json-server')
const cors = require('cors')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'database.json'))

server.use(jsonServer.bodyParser)
server.use(cors({
  origin: 'http://localhost:3000'
}))

server.use(async (request, response, next) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
  next()
})

server.post('/login', (request, response) => {
  try {
    const { username, password } = request.body
    const database = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'database.json'), 'utf-8'))
    const { users } = database

    const user = users.find(user => user.username === username && user.password === password)

    if (!user) {
      return response.status(400).json({ message: 'Пользователь не найден' })
    }

    return response.json(user)
  } catch (error) {
    return response.status(500).json({ message: error.message })
  }
})

server.use(router)

server.use((request, response, next) => {
  if (!request.headers.Authorization) {
    return response.status(401).json({ message: 'Не авторизован' })
  }
  next()
})

server.listen(8000, () => {
  console.log('Сервер работает на 8000 порту')
})
