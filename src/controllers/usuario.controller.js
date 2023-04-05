const pool = require("..");


const getUsuarios = async(req, res)=>{
    try{
        const response=await pool.query('select * from usuario');
        //console.log(response.rows);
        res.status(200).json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en usuario es: '+e)
    }
}

const postUsuarioPrueba = async (req, res)=>{
    try{
        const {usuario, contrasenia}=req.body;
        const response = await pool.query('select cuenta, password from usuario where cuenta=$1, password=$2',[usuario, contrasenia]);
        console.log(response);
        res.json({
            message:'Se hizo la conexion para el login de usuario',
            
        })
    }
    catch(e){
        console.log('El error que tenemos es en login usuario es: '+e)
    }
}
/*
const getUsuarioCompleto = async(req, res)=>{
    try{
        const id_usuario=req.params.id_usuario;
        //const id_rol=req.params.id_rol;
        const response=await pool.query('select * from usuario xu, persona xp, rol xr where xu.id_usuario=$1 and xp.ci=xu.ci and xr.id_rol=xu.id_rol',[id_usuario])
        res.json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en usuario es: '+e)
    }
}*/

const createUsuario = async(req, res)=>{
    try{
        const {cuenta, password, ci, id_rol}=req.body;
        const response = await pool.query('insert into usuario(cuenta, password, ci, id_rol) values($1, $2, $3, $4)',
        [  cuenta,
            password,
            ci,
            id_rol]);
    
        console.log(response);
        res.json({
            message:'usuario agregada exitosamente',
            body:{
            usuario:{cuenta,password, ci, id_rol}       
            }
        })
    }

    catch(e){
        console.log('El error que tenemos en crear usuario es: '+e)
    }
}

const getUsuarioByid_usuario = async(req, res) => {
    try{
        const id_usuario=req.params.id_usuario;
        const response =await pool.query('select * from usuario where id_usuario=$1', [id_usuario])
        res.json(response.rows);
    }
    catch(e){
        console.log('El error que tenemos en usuario es: '+e)
    }
}

const deleteUsuario = async(req, res) => {
    try{
        const id_usuario=req.params.id_usuario;
        const response = await pool.query('delete from usuario where id_usuario=$1',[id_usuario])
        console.log(response);
        res.json(`El usuario ${id_usuario} a sido eliminado`);
    }
    catch(e){
        console.log('El error que tenemos en usuario es: '+e)
    }
}

const updateUsuario = async(req, res) => {
    try{
        const id_usuario=req.params.id_usuario;
        const {cuenta,password, ci, id_rol}=req.body;
        const response = await pool.query('update usuario set cuenta=$1, password=$2 , ci=$3, id_rol=$4 where id_usuario=$5',[
            cuenta,
            password, 
            ci,
            id_rol,
            id_usuario
        ])
        console.log(response);
        res.json(`Los datos del usuario con ${id_usuario} ha sido actualizado`);
    }
    catch(e){
        console.log('El error que tenemos en usuario es: '+e)
    }
}

module.exports={
    getUsuarios,
    //getUsuarioCompleto,
    createUsuario,
    getUsuarioByid_usuario,
    deleteUsuario,
    updateUsuario,
    postUsuarioPrueba
}