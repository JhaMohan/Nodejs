const Joi = require('joi')
const express = require('express');
const app = express();

const geners = ["Action","comedy"]

app.get('/api/geners',(req,res)=>{
   res.send(geners);

})

const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`listing at the prot: ${port}.........`))