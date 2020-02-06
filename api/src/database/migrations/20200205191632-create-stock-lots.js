'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('stock_lots', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			units: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			price_by_unity: {
				type: Sequelize.REAL,
				allowNull: false,
			},
			shelf_life: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			stock_item_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'stock_items', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			category_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'stock_item_categories', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
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
		return queryInterface.dropTable('stock_lots')
	} // down
}// exports
