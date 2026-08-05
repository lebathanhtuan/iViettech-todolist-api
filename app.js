import express from 'express'
import path from 'path'
import cors from 'cors'

let taskList = []

const app = express()

app.use(express.static('publish'))
app.use(express.json())
app.use(cors())

app.get('/tasks', (req, res) => {
  res.json(taskList)
})

app.post('/tasks', (req, res) => {
  const data = req.body
  const newTask = {
    id: new Date().getTime().toString(),
    name: data.name,
    description: data.description,
  }
  taskList.unshift(newTask)
})

app.put('/tasks/:id', (req, res) => {
  // Sửa dữ liệu trong taskList
  const id = req.params.id
  const data = req.body
  const updatedTask = {
    id: id,
    name: data.name,
    description: data.description,
  }
  taskList = taskList.map((task) => {
    if (task.id === updatedTask.id) {
      return updatedTask
    }
    return task
  })
})

app.delete('/tasks/:id', (req, res) => {
  // Xóa dữ liệu trong taskList
  const id = req.params.id
  taskList = taskList.filter((task) => task.id !== id)
})

app.listen(4000, () => {
  console.log('Chạy thành công')
})
