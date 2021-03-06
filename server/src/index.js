const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose');
const posts = require('./routes/post')

mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(posts);


mongoose.connect(config.dbURL, config.dbOptions);

mongoose.connection.once('open',()=>{
    console.log('Mongoose - Успешко подключен');
    app.listen(process.env.PORT || config.port, ()=>{
        console.log(`Сервер запущен на порту ${config.port}`);
    })
}).on('error', (error)=>{
    console.warn(error);
})

// app.listen(process.env.PORT || config.port, ()=>{
    
// });
// app.get('/posts', (req, res)=>{
//     res.send([{
//         title:'First Project',
//         description: 'My text. Amahasla'
//     }])
// });