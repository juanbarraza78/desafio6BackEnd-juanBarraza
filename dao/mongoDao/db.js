const mongoose = require('mongoose');

class ManagerMongo 
{
    constructor(url)
    {
        this.url = url
    }

    connect() 
    {
        return mongoose.connect(this.url, {useUnifiedTopology: true,useNewUrlParser: true})
        .then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa');
        })
        .catch(err => console.log(err))
    }
}
  
module.exports = ManagerMongo;

