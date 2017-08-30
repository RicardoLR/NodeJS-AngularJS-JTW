'use strict'


let mongoose = require('mongoose');

let port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/prueba-amk-tegnologies', { useMongoClient: true })
	.then( () => {
		console.log("La conexion correcta a angular4-node");
	})
	.catch( err => console.log(err) )

module.exports =  mongoose;

