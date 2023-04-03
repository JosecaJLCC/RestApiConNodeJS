const {Router}= require('express');
const router = Router();

const {getPersonas, createPersona, getPersonasByCi, deletePersona, updatePersona} = require('../controllers/persona.controller.js')

//rutas
router.get('/persona', getPersonas);
router.post('/persona', createPersona);
router.get('/persona/:ci', getPersonasByCi);
router.delete('/persona/:ci', deletePersona);
router.put('/persona/:ci', updatePersona);

module.exports=router;