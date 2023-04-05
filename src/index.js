const express=require('express');
const app=express();
/*const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received');
})
app.use(bodyParser.urlencoded({extended: false}));*/

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

app.listen(3000);
console.log("El servidor esta en el puerto 3000");