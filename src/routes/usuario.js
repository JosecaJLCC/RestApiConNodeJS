const {Router}= require('express');
const router = Router();

const {postUsuarioPrueba, getUsuarios, createUsuario, getUsuarioByid_usuario, deleteUsuario, updateUsuario} = require('../controllers/usuario.controller.js')

//rutas
router.post('/auth', postUsuarioPrueba);
router.get('/crear_cuenta', getUsuarios);
router.post('/usuario', createUsuario);
router.get('usuario/:id_usuario', getUsuarioByid_usuario);
//router.get('/usuario/:id_usuario', getUsuarioCompleto);
router.delete('/usuario/:id_usuario', deleteUsuario);
router.put('/usuario/:id_usuario', updateUsuario);

module.exports=router;