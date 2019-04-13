const express = require('express');
const mongoose = require('mongoose'); 
const path = require('path');
const cors = require('cors')
const app = express();
app.use(cors());
const server = require('http').Server(app);
const io = require('socket.io')(server);


// Trabalhando com real-time
io.on('connection', socket => {
    socket.on('connectRoom', box => { // Conecta o usuario em uma sala especifica
        socket.join(box);
    }) 
})

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-sc6ls.mongodb.net/omnistack?retryWrites=true', {
    useNewUrlParser: true, 
})

app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(express.json()); //Trabalhar com json
app.use(express.urlencoded({extended: true})) // Permitir envio de arquivos
app.use(require('./routes')); // Importar as rotas
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))) // Para servir os arquivos estaticos


app.listen(process.env.PORT || 3333)

module.exports = app;