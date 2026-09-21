import express from 'express'

const router = express.Router()

const userList = []

router.post('/login', (req, res) => {
  const data = req.body
  const matchUser = userList.find((item) => item.email === data.email && item.password === data.password)
  if (matchUser) {
    res.json({
      id: matchUser.id,
      name: matchUser.name,
      email: matchUser.email,
    })
  } else {
    res.status(400).json({ message: 'Email hoặc mật khẩu không đúng.' })
  }
})

router.post('/register', (req, res) => {
  const data = req.body
  const existUser = userList.find((item) => item.email === data.email)
  if (existUser) {
    res.status(400).json({ message: 'Email đã tồn tại.' })
  } else {
    const newUser = {
      id: new Date().getTime().toString(),
      name: data.name,
      email: data.email,
      password: data.password,
    }
    userList.push(newUser)
    res.json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    })
  }
})

export default router
