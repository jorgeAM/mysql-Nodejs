const Sequelize = require('sequelize');
const sequelize = require('../db.js');

var Usuario = sequelize.define('usuario',{
	nombre: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	}
})

module.exports = Usuario