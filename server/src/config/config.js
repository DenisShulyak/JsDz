module.exports = {
    port: 27017,
    dbURL: 'mongodb://localhost/articles',
    dbOptions:{
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
}