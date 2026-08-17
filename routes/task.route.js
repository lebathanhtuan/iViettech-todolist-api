import express from 'express'

const router = express.Router()

let taskList = []

router.get('/', (req, res) => {
  res.json(taskList)
})

router.post('/', (req, res) => {
  const data = req.body
  const newTask = {
    id: new Date().getTime().toString(),
    name: data.name,
    description: data.description,
  }
  taskList.unshift(newTask)
  res.json(newTask)
})

router.put('/:id', (req, res) => {
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
  res.json(updatedTask)
})

router.delete('/:id', (req, res) => {
  // Xóa dữ liệu trong taskList
  const id = req.params.id
  taskList = taskList.filter((task) => task.id !== id)
  res.json({ id: id })
})

export default router
