import express from 'express'
import { PrismaClient } from '@prisma/client'

const usersRouter = express.Router()
const prisma = new PrismaClient()

usersRouter.use((req, res, next) => {
  const accessDate = new Date(Date.now())
  console.log('Users Router access time: ', accessDate.toString())
  next()
})

usersRouter.get('/', async (req, res) => {
  let users = []

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
      }
    })
  } else {
    users = await prisma.user.findMany()
  }

  res.status(200).json(users)
})

usersRouter.post('/', async (req, res) => {

  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  })

  res.status(201).json(req.body)
})

usersRouter.put('/:id', async (req, res) => {

  const id = parseInt(req.params.id)

  await prisma.user.update({
    where: {
      id
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  })

  res.status(201).json(req.body)
})

usersRouter.delete('/:id', async (req, res) => {

  const id = parseInt(req.params.id)

  await prisma.user.delete({
    where: { id }
  })

  res.status(200).json({ message: `Success. User ${id} deleted.` })
})

export default usersRouter