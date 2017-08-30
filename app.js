
'use strict'

var express = require('express');
var path = require('path');

var bodyParse = require('body-parser');

var app = express();

var api_usuarios = require('./routes/usuario');
var api_producto = require('./routes/api-tercero');


app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json() );


/* ==================================
	para manejo de TOKEN 
================================== */
var config = require('./config/config');

app.set('secrettoken', config.secret); 


app.use( (req, res, next)=>{
	// * cualquiera puede acceder
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers',
	 'X-API_KEY, Origin, X-Requested-With, Content-With, Content-Type, Accept, Access-Control-Request-Method');

	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

	res.header('Allow', 'GET, POST, PUT, DELETE');

	next();//salir de esta funcion
});


app.use('/api', api_usuarios);
app.use('/api', api_producto);



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});




/** ==================================
	para EXPORTAR objeto APP y usarlo en index.js
	con require();
================================== */
module.exports = app;

