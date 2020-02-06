import { Model, DataTypes } from 'sequelize'

class RecipeItem extends Model
{
	static init(sequelize)
	{
		super.init({
			custom_name: DataTypes.STRING(64),
			units: DataTypes.INTEGER,
			is_visible: DataTypes.BOOLEAN,
			can_be_increased: DataTypes.BOOLEAN,
			increase_amount: DataTypes.INTEGER,
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.StockItem, { foreignKey: 'recipe_id', as: 'recipe' })
		this.belongsTo(models.StockItem, { foreignKey: 'stock_item_id', as: 'stock_item' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // RecipeItem

export default RecipeItem
