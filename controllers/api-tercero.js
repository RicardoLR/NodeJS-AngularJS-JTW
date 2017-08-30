'use strict'

var requestify = require('requestify'); 


/** 

	@return: clubes del api externa,
*/
let getClubes = (req, res)=>{
	requestify.get('https://jsonplaceholder.typicode.com/posts')
		.then(function(response) {
			res.status(200).send({ data: response.getBody() });
		})
}

/** 

	@return: subcriptores del api externa,
*/
let getSuscriptores = (req, res)=>{
	requestify.get('https://jsonplaceholder.typicode.com/users')
		.then(function(response) {
			res.status(200).send({ data: response.getBody() });
		})
}


module.exports = {
	getClubes, 
	getSuscriptores
}