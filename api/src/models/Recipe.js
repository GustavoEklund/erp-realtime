import { Model, DataTypes } from 'sequelize'

class Recipe extends Model
{
	static init(sequelize)
	{
		super.init({
			name: DataTypes.STRING(64),
			is_for_sale: DataTypes.BOOLEAN,
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.RecipeCategory, { foreignKey: 'category_id', as: 'category' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user' })
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user' })
	} // associate
} // Recipe

export default Recipe
