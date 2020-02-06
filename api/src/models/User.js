import { Model, DataTypes } from 'sequelize'

class User extends Model
{
	static init(sequelize)
	{
		super.init({
			username: DataTypes.STRING(16),
			password: DataTypes.STRING(128),
			name: DataTypes.STRING(64),
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.Option, { foreignKey: 'id', as: 'option' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // User

export default User
