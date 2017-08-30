'use strict'

var mongoose = require('../connections/mongoose');
var Schema = mongoose.Schema;


var usuariosSchema = Schema({
	nombre: { type: String, require:true },
    email: { type: String, require:true, index:{unique:true} },
	password: { type: String, require:true }
});


module.exports = mongoose.model('Usuario', usuariosSchema);












