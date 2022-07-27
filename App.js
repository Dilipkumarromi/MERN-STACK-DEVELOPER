const express = require('express');
const app = express();
const db=require('./config/MangoDB')

const router=require('././router/Router')

app.use(express.json());
app.use(db)
app.use(router)
port = 82
app.listen(port,()=>{
    console.log('listening on port '+port);
});


