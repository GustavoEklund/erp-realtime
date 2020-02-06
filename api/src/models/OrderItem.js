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
		this.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' })
		this.belongsTo(models.Recipe, { foreignKey: 'recipe_id', as: 'recipe' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // OrderItem

export default OrderItem
