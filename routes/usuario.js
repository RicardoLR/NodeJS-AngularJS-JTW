'use strict'


let express = require('express');
let router = express.Router();

let UsuarioAuthCtrl = require("../controllers/auth");


router.post('/usuario/authenticate', UsuarioAuthCtrl.authenticate);
router.post('/usuario', UsuarioAuthCtrl.registro);



module.exports = router;

