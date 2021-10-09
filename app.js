const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const path = require ('path');

//import express from 'express';
//import morgan from 'morgan';
//import cors from 'cors';
//import path from 'path';


const app = express();

//conexion base de datos
const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://root:toor@cluster0.5937c.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('Connected'))
.catch(err=> console.log(err));

//MIDELWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//ruta
app.get('/', function(req,res){
    res.send('hola mundo');
   
    });
    //puerto
    app.set('puerto', process.env.PORT || 3000);
    app.listen(app.get('puerto'), () => {
        console.log('example app losten on port' + app.get('puerto'))



    });