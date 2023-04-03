const pool = require("..");


const getPersonas = async(req, res)=>{
    try{
        const response=await pool.query('select * from persona');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en persona es: '+e)
    }
}

const createPersona = async(req, res)=>{
    const {ci, p_nombre,s_nombre, appaterno, apmaterno, sexo, fechanac}=req.body;
    const response = await pool.query('insert into persona(ci, p_nombre,s_nombre, appaterno, apmaterno, sexo, fechanac) values($1, $2, $3, $4, $5, $6, $7)', [ci, p_nombre,s_nombre, appaterno, apmaterno, sexo, fechanac]);
    
    console.log(response);
    res.json({
        message:'Persona agregada exitosamente',
        body:{
           persona:{ci, p_nombre,s_nombre, appaterno, apmaterno, sexo, fechanac}
        }
    });
}

const getPersonasByCi = async(req, res) => {
    const ci=req.params.ci;
    const response =await pool.query('select * from persona where ci=$1', [ci])
    res.json(response.rows);
}

const deletePersona = async(req, res) => {
    const ci=req.params.ci;
    const response = await pool.query('delete from persona where ci=$1',[ci])
    console.log(response);
    res.json(`La persona ${ci} a sido eliminado`);
}

const updatePersona = async(req, res) => {
    const ci=req.params.ci;
    const {p_nombre,s_nombre, appaterno, apmaterno, sexo, fechanac}=req.body;
    const response = await pool.query('update persona set p_nombre=$1,s_nombre=$2, appaterno=$3, apmaterno=$4, sexo=$5, fechanac=$6 where ci=$7',[
        p_nombre,
        s_nombre, 
        appaterno, 
        apmaterno, 
        sexo, 
        fechanac,
        ci
    ])
    console.log(response);
    res.json(`Los datos de la persona con ${ci} ha sido actualizado`);
}

module.exports={
    getPersonas,
    createPersona,
    getPersonasByCi,
    deletePersona,
    updatePersona
}