import express from 'express'

import { createUser, getUsers, removeUser, updtateUser } from '../controllers/user.controller.js'

const usersRouter = express.Router()

usersRouter.use((req, res, next) => {
  const accessDate = new Date(Date.now())
  console.log('Users Router access time: ', accessDate.toString())
  next()
})

usersRouter.get('/', getUsers)

usersRouter.post('/', createUser)

usersRouter.put('/:id', updtateUser)

usersRouter.delete('/:id', removeUser)

export default usersRouter