import { Model, DataTypes } from 'sequelize'

class StockLot extends Model
{
	static init(sequelize)
	{
		super.init({
			units: DataTypes.INTEGER,
			price_by_unity: DataTypes.REAL,
			shelf_life: DataTypes.DATE,
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.StockItem, { foreignKey: 'stock_item_id', as: 'stock_item' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // StockLot

export default StockLot
