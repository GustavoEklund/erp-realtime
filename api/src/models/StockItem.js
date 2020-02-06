import { Model, DataTypes } from 'sequelize'

class StockItem extends Model
{
	static init(sequelize)
	{
		super.init({
			name: DataTypes.STRING(64),
			brand: DataTypes.STRING(32),
			type: DataTypes.ENUM(
				'comprimento',
				'capacidade',
				'massa',
				'volume',
				'unidade',
			),
			expire_alert: DataTypes.INTEGER,
			low_units_alert: DataTypes.INTEGER,
			enabled: DataTypes.BOOLEAN,
		}, {
			sequelize
		}) // init
	} // init

	static associate(models)
	{
		this.belongsTo(models.StockItemCategory, { foreignKey: 'category_id', as: 'category' })
		this.belongsTo(models.User, { foreignKey: 'created_by', as: 'created_by_user'})
		this.belongsTo(models.User, { foreignKey: 'updated_by', as: 'updated_by_user'})
	} // associate
} // StockItem

export default StockItem
