import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = async (req, res) => {
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
}

export const createUser = async (req, res) => {

  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  })

  res.status(201).json(req.body)
}

export const updtateUser = async (req, res) => {

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
}

export const removeUser = async (req, res) => {

  const id = parseInt(req.params.id)

  await prisma.user.delete({
    where: { id }
  })

  res.status(200).json({ message: `Success. User ${id} deleted.` })
}