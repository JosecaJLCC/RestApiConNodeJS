const {Router}= require('express');
const router = Router();

const {getUsuarios, createUsuario, getUsuarioByid_usuario, deleteUsuario, updateUsuario} = require('../controllers/usuario.controller.js')

//rutas
router.get('/Usuario', getUsuarios);
router.post('/Usuario', createUsuario);
router.get('/Usuario/:id_usuario', getUsuarioByid_usuario);
router.delete('/Usuario/:id_usuario', deleteUsuario);
router.put('/Usuario/:id_usuario', updateUsuario);

module.exports=router;