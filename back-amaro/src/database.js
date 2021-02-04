const mongoose = require('mongoose');
var mongodb = 'mongodb://127.0.0.1/amaro_db';

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log("Database is connected"))
  .catch(err => console.log(err));