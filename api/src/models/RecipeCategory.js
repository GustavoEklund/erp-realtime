import { Model, DataTypes } from 'sequelize'

class RecipeCategory extends Model
{
	static init(sequelize)
	{
		super.init({
			name: DataTypes.STRING(64),
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // RecipeCategory

export default RecipeCategory
