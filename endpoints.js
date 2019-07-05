const express = require('express');
const services = require('./services');

exports.routes = (app) =>  {
    app.get

var path = require('path');
const app = express();
const port = 3000;
const segundaParte = require('./segundoIndex')

segundaParte.setup(app);


app.get('/', (request, response) => { /*  / <-para indicar localhost  */ 
    response.json('Hola mundo');
});
/*Lo de arriba es un endpoint*/

/*Acá abajo otro endpoint */

app.get('/usuario', (request, response) => {
    const usuario = {
        name:'Yesenia',
        edad:28
    }
    response.send(usuario);
});

app.get('/usuarios', (request, response) => {
    const nombre = request.query.nombre;
    const edad = request.query.edad;
    response.send(edad);
});

/*NO CORRE :( */
app.get('/usuarios2', (request, response) => {
    const name = request.require.name;
    const age = request.require.age;
    const ageName = age + '_' + name;
    response.send(ageName);
});

app.delete('/borrar', (request, response) => {
    const id = request.query.id;
    response.send('ya se borró' + id);
});

app.get('/sumar', (request, response) => {
    const num1 = request.query.num1;
    const num2 = request.query.num2;
    const resultado = parseInt(num1) + parseInt(num2);
    response.json('Suma = ' + resultado);
});


app.get('/json', (request, response) => {
    const telefono = request.query.telefono;
    const marca = request.query.marca;
    const obj = {
        telefono : telefono,
        marca: marca
    }
    response.json(obj);
});

app.get('/tucorreo', (request, response) => {
    const micorreo = request.query.micorreo;
    response.send('Tu correo es: ' + micorreo + "@gmail.com")
});

app.get('/birthyear', (request, response) => {
    const birthyear = request.query.birthyear;
    const currentyear = 2019;
    const yourage = currentyear - parseInt(birthyear)
    response.send('You are '+ yourage + ' years old.');
});


//////////////////////////////POOSTTT

app.post('/datos', (request, response) => {
    const postData = request.body;
    response.addId(postData);
    response.json(postData);
});


app.listen(port, () => console.log/("El servidor funciona bien"));

app.get('/html', (request, response) => {
    response.render('form');
});

app.post('/form', (request, response) => {
    const data = request.body;
    response.send(data);
});

}