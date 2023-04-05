const {Router}= require('express');
const router = Router();

const {getHorario, createHorario, getHorarioByid_horario, deleteHorario, updateHorario} = require('../controllers/horario.controller.js')

//rutas
router.get('/horario', getHorario);
router.post('/horario', createHorario);
router.get('/horario/:id_horario', getHorarioByid_horario);
router.delete('/horario/:id_horario', deleteHorario);
router.put('/horario/:id_horario', updateHorario);

module.exports=router;


