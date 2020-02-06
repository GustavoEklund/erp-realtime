'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('stock_items', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING(64),
				allowNull: false,
			},
			brand: {
				type: Sequelize.STRING(32),
				allowNull: false,
			},
			type: {
				type: Sequelize.ENUM(
					'comprimento',
					'capacidade',
					'massa',
					'volume',
					'unidade',
				),
				defaultValue: 'unidade',
			},
			category_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'stock_item_categories', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			expire_alert: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			low_units_alert: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			enabled: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			created_by: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			updated_by: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		}) // queryInterface
	}, // up

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('stock_items')
	} // down
}// exports
