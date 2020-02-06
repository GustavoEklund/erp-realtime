'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('order_item_additionals', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			stock_item_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'stock_items', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			order_item_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'order_items', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			units: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			enabled: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
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
		return queryInterface.dropTable('order_item_additionals')
	} // down
}// exports
