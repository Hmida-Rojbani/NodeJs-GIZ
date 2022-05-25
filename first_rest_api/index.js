const express = require('express');
const morgan = require('morgan')
const config = require('config');
const appDebug = require('debug')('app:debug')
const configDebug = require('debug')('app:config');
const router_student= require('./routers/students');
const router_home= require('./routers/home');
const app=express();
const port = process.env.PORT || 3000;

appDebug(process.env.NODE_ENV)
appDebug(app.get('env'));

if(app.get('env')==='development')
    app.use(morgan('dev'))

app.use(express.json())

configDebug('Application name :', config.get('app_name'));
configDebug('DB host :', config.get('db.host'));
configDebug('DB password :', config.get('db.password'));
//use routers
app.use('/api/students',router_student);
app.use('/home',router_home);

app.listen(port,function () {
    appDebug('Server running on '+port);
})