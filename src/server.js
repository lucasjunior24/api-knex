const express = require('express');
const routes = require('./routes');
// import routes from './routes'
// import cors from 'cors'

const app = express();
app.use(routes);


app.listen(3333, () => {
    console.log('Servidor rodando... ');
})