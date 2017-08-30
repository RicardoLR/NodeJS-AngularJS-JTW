'use strict'

let express = require('express');
let api = express.Router();


let apiTerceroCtrl = require("../controllers/api-tercero");



api.get('/clubs', apiTerceroCtrl.getClubes);
api.get('/subscribers', apiTerceroCtrl.getSuscriptores);



module.exports = api;

