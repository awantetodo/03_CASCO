//Me fui copiando del profe durante las clases, me re cuesta

const express = require('express');
const fs = require('fs');
const { get } = require('http');

const app = express();

//CONSIGNA 1 - DEFINIR PUERTO 8080
const puerto = 8080;

//CONSIGNA 2- ACCEDER A LOS PRODUCTOS
app.get('/productos', (req, res) => {
    const data = fs.readFileSync(`./productos.txt`, 'utf-8');
    const arrayProductos = JSON.parse(data);
    res.json({
        items: arrayProductos,
        cantidad: arrayProductos.length
    });
});

//CONSIGNA 3 - ACCEDER A PRODUCTORANDOM
app.get('/productoRandom', (req, res) => {
    const data = fs.readFileSync(`./productos.txt`, 'utf-8');
    const arrayProductos = JSON.parse(data);
    let numeroAleatorio = Math.floor(Math.random() * arrayProductos.length)
    let producto = arrayProductos[numeroAleatorio];
    res.json({ item: producto });
});


// EL SERVIDOR ESCUCHA EL PUERTO
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});


// ERROR, NOTIFICA
server.on('error', error => {
    console.log('error en el servidor:', error);
});