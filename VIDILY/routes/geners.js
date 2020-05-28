const express = require('express')
const router = express.Router();

const geners = [
    {id:1,name:'Action'},
    {id:2,name:'Horror'},
    {id:3,name:'Comedy'}
 ]
 
 router.get('/',(req,res)=>{
    res.send(geners);
 
 })
 
 
 router.post('/',(req,res)=>{
   
    const {error} = validateGener(req.body);
    if (error) return res.status(400).send(error.details[0].message);
 
    const gener= {
       id: geners.length +1,
       name: req.body.name
    }
    geners.push(gener)
    res.send(gener)
 });


 router.put('/:id',(req,res)=>{
     const gener = geners.find(c => c.id === parseInt(req.params.id));
     if(!gener) return res.status(400).send('The gener with given ID is not present');

     const {error} = validateGener(req.body);
     if (error) return res.status(400).send(error.details[0].message);

     gener.name = req.body.name
     res.send(gener);
 });



 router.delete('/:id',(req,res)=>{
    const gener = geners.find(c => c.id === parseInt(req.params.id));
    if(!gener) return res.status(400).send('The gener with given ID is not present');

    const index = geners.indexOf(gener);
    geners.splice(index,1)

    res.send(geners)

 });


 router.get('/:id',(req,res)=>{
    const gener = geners.find(c => c.id === parseInt(req.params.id));
    if(!gener) return res.status(400).send('The gener with given ID is not present');

    res.send(gener);

 })
 
 
 function validateGener(movie) {
    const schema = {
       name: Joi.string().min(3).required();
    }
 
    return Joi.validate(movie,schema)
 }

 module.exports = router;
