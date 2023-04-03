const {Router}= require('express');
const router = Router();

const {getRoles, createRol, getRolByid_rol, deleteRol, updateRol} = require('../controllers/rol.controller.js')

//rutas
router.get('/rol', getRoles);
router.post('/rol', createRol);
router.get('/rol/:id_rol', getRolByid_rol);
router.delete('/rol/:id_rol', deleteRol);
router.put('/rol/:id_rol', updateRol);

module.exports=router;