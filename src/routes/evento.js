const {Router}= require('express');
const router = Router();

const {getEventos, createEvento, getEventosByidEvento, deleteEvento, updateEvento} = require('../controllers/evento.controller.js')

//rutas
router.get('/evento', getEventos);
router.post('/evento', createEvento);
router.get('/evento/:idEvento', getEventosByidEvento);
router.delete('/evento/:idEvento', deleteEvento);
router.put('/evento/:idEvento', updateEvento);

module.exports=router;