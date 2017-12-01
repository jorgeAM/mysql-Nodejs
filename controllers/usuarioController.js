const Usuario = require('../models/usuario.js')

function listarUsuarios(req, res){
	Usuario.findAll().then(usuarios => console.log(usuarios))
}

module.exports = {
	listarUsuarios
}