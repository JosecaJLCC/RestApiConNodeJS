const pool = require("..");


const getEventos = async(req, res)=>{
    try{
        const response=await pool.query('select * from evento');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos es: '+e)
    }
}

const createEvento = async(req, res)=>{
    const {nombre,tipoevento,descripcion,fechaevento, idambiente}=req.body;
    const response = await pool.query('insert into evento(nombre,tipoevento,descripcion,fechaevento, idambiente) values($1, $2, $3, $4, $5)', [nombre,tipoevento,descripcion,fechaevento, idambiente]);
    
    console.log(response);
    res.json({
        message:'evento agregada exitosamente',
        body:{
           evento:{nombre,tipoevento,descripcion,fechaevento, idambiente}
        }
    });
}

const getEventosByidEvento = async(req, res) => {
    const idEvento=req.params.idEvento;
    const response =await pool.query('select * from evento where idEvento=$1', [idEvento])
    res.json(response.rows);
}

const deleteEvento = async(req, res) => {
    const idEvento=req.params.idEvento;
    const response = await pool.query('delete from evento where idEvento=$1',[idEvento])
    console.log(response);
    res.json(`El evento ${idEvento} a sido eliminado`);
}

const updateEvento = async(req, res) => {
    const idEvento=req.params.idEvento;
    const {nombre,tipoevento,descripcion,fechaevento, idambiente}=req.body;
    const response = await pool.query('update evento set nombre=$1,tipoevento=$2, descripcion=$3, fechaevento=$4, idAmbiente=$5 where idEvento=$6',[
        nombre,
        tipoevento,
        descripcion,
        fechaevento, 
        idambiente,
        idEvento
    ])
    console.log(response);
    res.json(`Los datos del evento con ${idEvento} ha sido actualizado`);
}

module.exports={
    getEventos,
    createEvento,
    getEventosByidEvento,
    deleteEvento,
    updateEvento
}