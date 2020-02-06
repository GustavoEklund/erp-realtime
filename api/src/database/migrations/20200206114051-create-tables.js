'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('tables', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.VARCHAR(16),
				allowNull: false,
			},
			status: {
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
		return queryInterface.dropTable('tables')
	} // down
}// exports
