import { Model, DataTypes } from 'sequelize'

class OrderItem extends Model
{
	static init(sequelize)
	{
		super.init({
			units: DataTypes.INTEGER,
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize,
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.StockItem, { foreignKey: 'stock_item_id', as: 'stock_item' })
		this.belongsTo(models.OrderItem, { foreignKey: 'order_item_id', as: 'order_item' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // OrderItem

export default OrderItem
