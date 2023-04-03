const {Router}= require('express');
const router = Router();

const {getHorario, createHorario, getHorarioByidHorario, deleteHorario, updateHorario} = require('../controllers/horario.controller.js')

//rutas
router.get('/horario', getHorario);
router.post('/horario', createHorario);
router.get('/horario/:idhorario', getHorarioByidHorario);
router.delete('/horario/:idhorario', deleteHorario);
router.put('/horario/:idhorario', updateHorario);

module.exports=router;


