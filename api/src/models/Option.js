import { Model, DataTypes } from 'sequelize'

class Option extends Model
{
	static init(sequelize)
	{
		super.init({
			updated_by: DataTypes.INTEGER,
		}, {
			sequelize,
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // Option

export default Option
