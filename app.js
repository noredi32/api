const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const mysql = require('mysql');
app.use(helmet());
app.use(cors());

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes'));
app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
    console.log("Server is running.");
});

var conexion = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b62d42f0eb10ff',
    password: 'beca043a',
    database: 'heroku_0934279acadb2ff',
    port: '3001',
});

conexion.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión exitosa');
    }
})

