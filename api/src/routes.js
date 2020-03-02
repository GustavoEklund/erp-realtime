import express, { request, response } from 'express'

import AuthController from './controllers/AuthController'
import UserController from './controllers/UserController'
import OptionController from './controllers/OptionController'
import StockItemController from './controllers/StockItemController'
import StockItemCategoriesController from './controllers/StockItemCategoriesController'

const routes = express.Router()

routes.post('/authentication', AuthController.authenticateUser)

routes.get('/users', UserController.index)
routes.post('/users', AuthController.authenticateToken, UserController.store)

routes.get('/users/:user_id/options', OptionController.index)
routes.post('/users/:user_id/options', OptionController.store)

routes.get('/stock-items', AuthController.authenticateToken, StockItemController.findAll)

routes.get('/stock-item-categories', AuthController.authenticateToken, StockItemCategoriesController.findAll)
routes.post('/stock-item-categories', AuthController.authenticateToken, StockItemCategoriesController.store)
export default routes
