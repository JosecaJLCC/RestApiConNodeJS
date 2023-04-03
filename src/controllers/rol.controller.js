const pool = require("..");


const getRoles = async(req, res)=>{
    try{
        const response=await pool.query('select * from rol');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en rol es: '+e)
    }
}

const createRol = async(req, res)=>{
    const {id_rol, nombrer, descripcion}=req.body;
    const response = await pool.query('insert into rol(id_rol, nombrer,descripcion) values($1, $2, $3)', [id_rol, nombrer,descripcion]);
    
    console.log(response);
    res.json({
        message:'Rol agregada exitosamente',
        body:{
           Rol:{id_rol, nombrer,descripcion}
        }
    });
}

const getRolByid_rol = async(req, res) => {
    const id_rol=req.params.id_rol;
    const response =await pool.query('select * from rol where id_rol=$1', [id_rol])
    res.json(response.rows);
}

const deleteRol = async(req, res) => {
    const id_rol=req.params.id_rol;
    const response = await pool.query('delete from rol where id_rol=$1',[id_rol])
    console.log(response);
    res.json(`El Rol ${id_rol} a sido eliminado`);
}

const updateRol = async(req, res) => {
    const id_rol=req.params.id_rol;
    const {nombrer,descripcion}=req.body;
    const response = await pool.query('update rol set nombrer=$1,descripcion=$2 where id_rol=$3',
    [
        nombrer,
        descripcion, 
        id_rol
    ])
    console.log(response);
    res.json(`Los datos del Rol con ${id_rol} ha sido actualizado`);
}

module.exports={
    getRoles,
    createRol,
    getRolByid_rol,
    deleteRol,
    updateRol
}