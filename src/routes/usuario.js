const {Router}= require('express');
const router = Router();

const {getUsuarios, createUsuario, getUsuarioCompleto, deleteUsuario, updateUsuario} = require('../controllers/usuario.controller.js')

//rutas
router.get('/usuario', getUsuarios);
router.post('/usuario', createUsuario);
//router.get('usuario/:id_usuario', getUsuarioByid_usuario)
router.get('/usuario/:id_usuario', getUsuarioCompleto);
router.delete('/usuario/:id_usuario', deleteUsuario);
router.put('/usuario/:id_usuario', updateUsuario);

module.exports=router;