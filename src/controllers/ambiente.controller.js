const pool = require("..");


const getAmbientes = async(req, res)=>{
    try{
        const response=await pool.query('select * from ambiente');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en ambiente es: '+e)
    }
}

const createAmbiente = async(req, res)=>{
    const {nombre,nropuerta, zona, calle, capacidad}=req.body;
    const response = await pool.query('insert into ambiente(nombre,nropuerta, zona, calle, capacidad) values($1, $2, $3, $4, $5)', [nombre,nropuerta, zona, calle, capacidad]);
    
    console.log(response);
    res.json({
        message:'Ambiente agregado exitosamente',
        body:{
           Ambiente:{nombre,nropuerta, zona, calle, capacidad}
        }
    });
}

const getAmbientesByid_ambiente = async(req, res) => {
    const id_ambiente=req.params.id_ambiente;
    const response =await pool.query('select * from ambiente where id_ambiente=$1', [id_ambiente])
    res.json(response.rows);
}

const deleteAmbiente = async(req, res) => {
    const id_ambiente=req.params.id_ambiente;
    const response = await pool.query('delete from ambiente where id_ambiente=$1',[id_ambiente])
    console.log(response);
    res.json(`El Ambiente ${id_ambiente} a sido eliminado`);
}

const updateAmbiente = async(req, res) => {
    const id_ambiente=req.params.id_ambiente;
    const {nombre,nropuerta, zona, calle, capaid_ambientedad, fechanac}=req.body;
    const response = await pool.query('update ambiente set nombre=$1,nropuerta=$2, zona=$3, calle=$4, capacidad=$5 where id_ambiente=$6',[
        nombre,
        nropuerta, 
        zona, 
        calle, 
        capaid_ambientedad, 
        id_ambiente
    ])
    console.log(response);
    res.json(`Los datos del Ambiente con id ${id_ambiente} ha sido actualizado`);
}

module.exports={
    getAmbientes,
    createAmbiente,
    getAmbientesByid_ambiente,
    deleteAmbiente,
    updateAmbiente
}