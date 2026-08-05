import express from 'express'
import path from 'path'
import cors from 'cors'

import userRoute from './routes/user.route.js'
import taskRoute from './routes/task.route.js'

const app = express()

app.use(cors())
app.use(express.static('publish'))
app.use(express.json())

app.use('/users', userRoute)
app.use('/tasks', taskRoute)

app.listen(4000, () => {
  console.log('Chạy thành công')
})
