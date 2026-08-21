import pool from '../config/db.js';
import models from '../models/index.js'

const { tasks, types } = models;

export async function getAllTasks(req, res) {
  try {
    const result = await tasks.findAll({
      include: [
        {
          model: types,
          as: 'type',
          attributes: ['id', 'name'],
        },
      ],
    });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Lỗi server' });
  }
}

export async function createTask(req, res) {
  try {
    const { name, description } = req.body;

    const result = await tasks.create({
      name,
      description,
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Lỗi server' });
  }
}

export async function updateTask(req, res) {
  try {
    const { id } = req.params;

    const result = await tasks.update(req.body,
      { 
        where: { id: id }
      }
    );

    if (result[0] === 0) {
      return res.status(404).json({
        message: 'Không tìm thấy công việc để cập nhật',
      });
    }

    res.status(200).json({
      message: 'Cập nhật công việc thành công',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Lỗi server' });
  }
}

export async function deleteTask(req, res) {
  try {
    const { id } = req.params;

    const result = await tasks.destroy({
      where: { id: id },
    });

    if (result === 0) {
      return res.status(404).json({
        message: 'Không tìm thấy công việc để xóa',
      });
    }

    res.status(200).json({
      message: 'Xóa công việc thành công',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Lỗi server' });
  }
}
