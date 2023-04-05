const pool = require("..");


const getEventos = async(req, res)=>{
    try{
        const response=await pool.query('select * from evento');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en Evento es: '+e)
    }
}

const createEvento = async(req, res)=>{
    const {nombre,tipoevento,descripcion}=req.body;
    const response = await pool.query('insert into evento(nombre,tipoevento,descripcion) values($1, $2, $3)', [nombre,tipoevento,descripcion]);
    
    console.log(response);
    res.json({
        message:'Evento agregado exitosamente',
        body:{
           evento:{nombre,tipoevento,descripcion}
        }
    });
}

const getEventoByid_evento = async(req, res) => {
    const id_evento=req.params.id_evento;
    const response =await pool.query('select * from evento where id_evento=$1', [id_evento])
    res.json(response.rows);
}

const deleteEvento = async(req, res) => {
    const id_evento=req.params.id_evento;
    const response = await pool.query('delete from evento where id_evento=$1',[id_evento])
    console.log(response);
    res.json(`El evento ${id_evento} ha sido eliminado`);
}

const updateEvento = async(req, res) => {
    const id_evento=req.params.id_evento;
    const {nombre,tipoevento,descripcion}=req.body;
    const response = await pool.query('update evento set nombre=$1,tipoevento=$2, descripcion=$3 where id_evento=$4',[
        nombre,
        tipoevento,
        descripcion,
        id_evento
    ])
    console.log(response);
    res.json(`Los datos del evento con ${id_evento} ha sido actualizado`);
}

module.exports={
    getEventos,
    createEvento,
    getEventoByid_evento,
    deleteEvento,
    updateEvento
}