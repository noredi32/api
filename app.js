const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
/*const mysql = require('mysql');*/
app.use(helmet());
app.use(cors());

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes'));
/*app.listen(3001, () => {
    console.log(`Express on port 3001`);
});*/

const PORT = process.env.PORT || 4000

app.listen(PORT, function() {
    console.log('Conexión exitosa, servidor escuchando en el puerto', PORT)
})

/*var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Umbrella34',
    database: 'askmesapi',
    port: '3306',
});

conexion.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión exitosa');
    }
})*/