const pool = require("..");


const getHorario = async(req, res)=>{
    try{
        const response=await pool.query('select * from Horario');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos es: '+e)
    }
}

const createHorario = async(req, res)=>{
    const {idHorario, horaIni, horaFin, idEvento}=req.body;
    const response = await pool.query('insert into Horario(idHorario, horaIni, horaFin, idEvento) values($1, $2, $3, $4)', [idHorario, horaIni, horaFin, idEvento]);
    
    console.log(response);
    res.json({
        message:'Horario agregado exitosamente',
        body:{
           Horario:{idHorario, horaIni, horaFin, idEvento}
        }
    });
}

const getHorarioByidHorario = async(req, res) => {
    const idHorario=req.params.idHorario;
    const response =await pool.query('select * from Horario where idHorario=$1', [idHorario])
    res.json(response.rows);
}

const deleteHorario = async(req, res) => {
    const idHorario=req.params.idHorario;
    const response = await pool.query('delete from Horario where idHorario=$1',[idHorario])
    console.log(response);
    res.json(`El Horario ${idHorario} a sido eliminado`);
}

const updateHorario = async(req, res) => {
    const idHorario=req.params.idHorario;
    const {horaIni, horaFin, idEvento}=req.body;
    const response = await pool.query('update Horario set horaIni=$1,horaFin=$2, idEvento=$3 where idHorario=$4',[
        horaIni,
        horaFin,
        idEvento
    ])
    console.log(response);
    res.json(`Los datos del Horario con ${idHorario} ha sido actualizado`);
}

module.exports={
    getHorario,
    createHorario,
    getHorarioByidHorario,
    deleteHorario,
    updateHorario
}