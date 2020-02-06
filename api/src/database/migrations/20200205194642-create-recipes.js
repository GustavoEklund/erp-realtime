'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('recipes', {
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
			category: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'recipe_categories', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			},
			is_for_sale: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
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
		return queryInterface.dropTable('recipes')
	} // down
}// exports
