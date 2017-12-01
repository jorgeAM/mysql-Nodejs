const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./db.js');

const userController = require('./controllers/usuarioController.js')

app.use(express.static('public'))

//ruta por defecto
app.get('/', userController.listarUsuarios)

app.listen(3000, () => {
  console.log('App corriendo en el puerto 3000')
  sequelize.authenticate().then(() => {
     console.log('conexion a mysql correcta!');
  }).catch(err => console.log(err))
});
