const pool = require("..");


const getHorario = async(req, res)=>{
    try{
        const response=await pool.query('select * from horario');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en horario es: '+e)
    }
}

const createHorario = async(req, res)=>{
    const {fechaini, fechafin, horaini, horafin, id_evento, id_ambiente}=req.body;
    const response = await pool.query('insert into horario(fechaini, fechafin, horaini, horafin, id_evento, id_ambiente) values($1, $2, $3, $4, $5, $6)', 
    [fechaini, fechafin, horaini, horafin, id_evento, id_ambiente]);
    
    console.log(response);
    res.json({
        message:'Horario agregado exitosamente',
        body:{
           Horario:{fechaini, fechafin, horaini, horafin, id_evento, id_ambiente}
        }
    });
}

const getHorarioByid_horario = async(req, res) => {
    const id_horario=req.params.id_horario;
    const response =await pool.query('select * from horario where id_horario=$1', [id_horario])
    res.json(response.rows);
}

const deleteHorario = async(req, res) => {
    const id_horario=req.params.id_horario;
    const response = await pool.query('delete from horario where id_horario=$1',[id_horario])
    console.log(response);
    res.json(`El Horario con id ${id_horario} ha sido eliminado`);
}

const updateHorario = async(req, res) => {
    const id_horario=req.params.id_horario;
    const {fechaini, fechafin, horaIni, horaFin, id_evento, id_ambiente}=req.body;
    const response = await pool.query('update horario set fechaini=$1, fechafin=$2, horaIni=$3, horaFin=$4, id_evento=$5, id_ambiente=$6 where id_horario=$7',[
        fechaini,
        fechafin,
        horaIni,
        horaFin,
        id_evento,
        id_ambiente
    ])
    console.log(response);
    res.json(`Los datos del Horario con ${id_horario} ha sido actualizado`);
}

module.exports={
    getHorario,
    createHorario,
    getHorarioByid_horario,
    deleteHorario,
    updateHorario
}