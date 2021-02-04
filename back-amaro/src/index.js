const express = require('express')
const mongoose = require('mongoose');
const app = express();
const host = '127.0.0.0';






var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;  

require('./database');
app.use(express.json());
app.use('/api', require('./routes/index.route'))

 
app.listen(port, () => console.log("Server running in port: ", port));

