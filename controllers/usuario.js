'use strict'


let Usuario = require('../models/usuarios')

function getProductosDeUsuario(req, res){

	let userID = req.params.id_user;


	Usuario.findById( userID, function(err, usuarioEncontrado ){
		if(err) res.status(500).send({ message : "Error al devolver usuario por id"});     
		
		if(!usuarioEncontrado) res.status(404).send({ message : "No existen usuario..." });     
		
		res.status(200).send({ message: "datos enviados",  data: usuarioEncontrado });
	});
}


/** hacemos objeto de funciones */
module.exports = {
	getProductosDeUsuario
}
