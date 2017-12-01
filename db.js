const Sequelize = require('sequelize');

sequelize = new Sequelize('prueba', 'root', 'caradepene', {
	host: 'localhost',
	dialect: 'mysql',
	define: {
		timestamps: false
	}
});

module.exports = sequelize