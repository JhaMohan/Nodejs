const Joi = require('joi')
const express = require('express');
const app = express();
const geners = require('./routes/geners')

app.use(express.json())
app.use('/api/geners',geners)


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`listing at the prot: ${port}.........`))