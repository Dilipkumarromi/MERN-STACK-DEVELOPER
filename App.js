const express = require('express');
const app = express();
const db=require('./config/MangoDB')


app.use(db)
port = 82
app.listen(port,()=>{
    console.log('listening on port '+port);
});


