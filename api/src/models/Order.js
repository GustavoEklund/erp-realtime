import { Model, DataTypes } from 'sequelize'

class Order extends Model
{
	static init(sequelize)
	{
		super.init({
			status: DataTypes.INTEGER,
			enabled: DataTypes.BOOLEAN
		}, {
			sequelize,
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.Table, { foreignKey: 'table_id', as: 'table' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // Order

export default Order
