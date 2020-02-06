import Sequelize from 'sequelize'
import dbConfig from '../config/database'

import User from '../models/User'
import Option from '../models/Option'
import StockItemCategory from '../models/StockItemCategory'
import RecipeCategory from '../models/RecipeCategory'
import StockItem from '../models/StockItem'
import StockLot from '../models/StockLot'
import Recipe from '../models/Recipe'
import RecipeItem from '../models/RecipeItem'
import Table from '../models/Table'
import Order from '../models/Order'
import OrderItem from '../models/OrderItem'
import OrderItemAdditional from '../models/OrderItemAdditional'

const connection = new Sequelize(dbConfig)

User.init(connection)
Option.init(connection)
StockItemCategory.init(connection)
RecipeCategory.init(connection)
StockItem.init(connection)
StockLot.init(connection)
Recipe.init(connection)
RecipeItem.init(connection)
Table.init(connection)
Order.init(connection)
OrderItem.init(connection)
OrderItemAdditional.init(connection)

User.associate(connection.models)
Option.associate(connection.models)
StockItemCategory.associate(connection.models)
RecipeCategory.associate(connection.models)
StockItem.associate(connection.models)
StockLot.associate(connection.models)
Recipe.associate(connection.models)
RecipeItem.associate(connection.models)
Table.associate(connection.models)
Order.associate(connection.models)
OrderItem.associate(connection.models)
OrderItemAdditional.associate(connection.models)

export default connection
