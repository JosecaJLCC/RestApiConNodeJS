const {Router}= require('express');
const router = Router();

const {getAmbientes, createAmbiente, getAmbientesByid_ambiente, deleteAmbiente, updateAmbiente} = require('../controllers/ambiente.controller.js')

//rutas
router.get('/ambiente', getAmbientes);
router.post('/ambiente', createAmbiente);
router.get('/ambiente/:id_ambiente', getAmbientesByid_ambiente);
router.delete('/ambiente/:id_ambiente', deleteAmbiente);
router.put('/ambiente/:id_ambiente', updateAmbiente);

module.exports=router;