'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('recipe_items', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			custom_name: {
				type: Sequelize.STRING(64),
				allowNull: false,
			},
			stock_item_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'stock_items', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			units: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			recipe_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'recipes', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			can_be_increased: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			increase_amount: {
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
		return queryInterface.dropTable('recipe_items')
	} // down
}// exports
