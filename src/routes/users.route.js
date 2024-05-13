import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'

export const usersRouter = Router()
const usersController = new UsersController()

usersRouter.post('/', authenticationMiddleware, usersController.createUser)
usersRouter.get('/', authenticationMiddleware, usersController.getAllUsers)
usersRouter.patch('/:id', authenticationMiddleware, usersController.updateUser)
usersRouter.delete('/:id', authenticationMiddleware, usersController.deleteUser)
