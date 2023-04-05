const express=require('express');
const cors=require('cors')
const app=express();

//const whiteList=['http://localhost:8080/*']
app.use(cors())

//Conexion a postgresql
const {Pool}=require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:"123456",
    database:'SistemaAcademico',
    
 });
 module.exports=pool;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/persona'));
app.use(require('./routes/evento'));
app.use(require('./routes/horario'));
app.use(require('./routes/rol'));
app.use(require('./routes/usuario'));
app.use(require('./routes/ambiente'))



/*234324324
app.use ( function ( req, res, next ) {
    res.header ( "Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD" ); // actualización para que coincida con el dominio, hará la solicitud desde
    res.header ( "Access-Control-Allow-Headers", "Origen, X-Rechatado-Con, Tipo de contenido, Aceptar" );
    siguiente ( );
  } );
  
  app.get ( '/', función ( req, res, next ) {
    // Manejar el obtener para esta ruta
  } );
  
  app.post ( '/', función ( req, res, next ) {
   // Manejar el puesto para esta ruta
  } );
*/24345345345

app.listen(3000);
console.log("El servidor esta en el puerto 3000");