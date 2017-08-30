'use strict'

let express 	= require('express');
let app = express();

let Usuario = require('../models/usuarios')
let jwt    = require('jsonwebtoken'); 

let config = require('../config/config'); 


let crypto = require('crypto'),
	algorithm = 'aes-256-ctr',
	password = 'sistemarichi'

/** ====================================
	funcion para encrptar propia
==================================== */
function encrypt(text){
	let cipher = crypto.createCipher(algorithm, password)
	let crypted = cipher.update(text, 'utf8', 'hex')

	crypted += cipher.final('hex')

	return crypted
}

function descrypt(text){
	let decipher = crypto.createDecipher(algorithm, password)
	let dec = decipher.update(text, 'hex',  'utf8')

	dec += decipher.final('utf8')

	return dec
}


function verificarToken(req, res, next){

	let token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (token) {

		jwt.verify(token, config.secret, function(err, decoded) {      
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });    
			} else {
				req.decoded = decoded;    
				next();
			}
		});

	} else {

		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.' 
		});
	}

}


function registro(req, res){
	
	let modelUsuario = new Usuario({ 
		nombre : req.body.nombre,
		email : req.body.email,
		password : encrypt(req.body.password),
	});

	modelUsuario.save( function(err) {
		if(err)		res.status(500).send({ message : "Registro fallido"});      
		else 		res.status(200).send({ user : modelUsuario }); 
	});
}

/**
	@return  Autenticate, envia el token cuando el usuario de logue
*/
function authenticate(req, res){

	Usuario.findOne({
		email: req.body.email
		}, function(err, user) {

	    if (err) throw err;

	    if (!user) {
	      res.json({ success: false, message: 'Authentication failed. Usuario not found.' });
	    
	    } else if (user) {

	      if ( descrypt(user.password) !== req.body.password ) {
	        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
	      
	      } else {

	        let token = jwt.sign(user, config.secret, {
 				expiresIn: 60 * 60
  	        });

	        res.json({
	          success: true,
	          token: token
	        });
	      } 
	    }  

    });
}


/** hacemos objeto de funciones */
module.exports = {
	verificarToken,
	authenticate,
	registro
}
