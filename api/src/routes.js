import express from 'express'

import UserController from './controllers/UserController'
import OptionController from './controllers/OptionController'

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/options', OptionController.index)
routes.post('/users/:user_id/options', OptionController.store)

export default routes
