import { Model, DataTypes } from 'sequelize'

class Table extends Model
{
	static init(sequelize)
	{
		super.init({
			name: DataTypes.STRING(16),
			status: DataTypes.INTEGER,
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize,
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // Table

export default Table
