'use strict'

var app = require('./app');


/** ==================================
	tema de produccion. por si hay variable de entorno PORT
================================== */
var port = process.env.PORT || 8080;


var mongoose = require('./connections/mongoose');


// callback function(){} que escucha
app.listen(port, function(){
	console.log(`API REST ProdUp http://localhost:${port}`);
});	
