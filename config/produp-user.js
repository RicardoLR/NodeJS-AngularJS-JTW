
//var mongoose = require('../connections/mongoose');

var mongoose = require('mongoose')
	require('mongoose-double')(mongoose);
 
var SchemaTypes = mongoose.Schema.Types;
var Schema = mongoose.Schema;

module.exports = {

	usuario : { type: Schema.Types.ObjectId, ref: 'Usuario' }, // sin S de 'usuarios'

	categoria: { type: String, require:true },
	cantidad: { type: Number, require:true },
	condicionProducto: { type: Number }, // 0 segunda mano, 1 nuevo
	garantía: { type: Number }, // 0 no, 1 si tiene
	
	preciosVentaMayorista: { type: SchemaTypes.Double, require:true },
	preciosVentaDistribuidor: { type: SchemaTypes.Double, require:true },
	preciosVentaRevendedor: { type: SchemaTypes.Double, require:true }, 
	preciosVentaUsuarioFinal: { type: SchemaTypes.Double, require:true },

	precios_compra: { type: SchemaTypes.Double, require:true },
	
	imagen_principal: { type: String },
	imagen_secundaria: { type: String },
	imagen_tercera: { type: String }, 
	video_id: { type: String }
};


/** contiene  13 campos */



