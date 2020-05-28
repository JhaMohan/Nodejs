const express = require('express');
const router = express.Router();


const course = [
    {id:1,name:'Aditya'},
    {id:2,name:'Aditya2'},
    {id:3,name:'Aditya3'},
]

router.get('/',(req,res)=>{
    res.send(course)
});

router.get('/:id',(req,res)=>{

    const course1 = course.find(c => c.id === parseInt(req.params.id));
    if(!course1) return res.status(404).send('The course you are finding is not present...........')
    res.send(course1)

});


router.post('/',(req,res)=>{
   
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
      

    // if (!req.body.name || req.body.name.length < 3) {
    //     //400 Bad Request
    //     res.status(400).send('name should be there or minimum 3 character........')
    //     return;
    // }


    const courses = {
        id: course.length +1,
        name: req.body.name
    }
    
    course.push(courses);
    res.send(course);

});



router.put('/:id',(req,res)=>{
    
    //id present
    const courses = course.find(c => c.id === parseInt(req.params.id));
    if (!courses) return res.status(404).send('user not present');
   

    //validating value
   
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    courses.name = req.body.name;

    res.send(course);

});

router.get('/:year/:month',(req,res)=>{
     res.send(req.params);
    // res.send(req.query); //http://localhost:8000/api/posts/2018/3?sortBY="name%2"
});

router.delete('/:id',(req,res)=>{
  
    const courses = course.find(c => c.id === parseInt(req.params.id));
    if (!courses) return res.status(404).send('user not present ');
  
    const index = course.indexOf(courses)
    course.splice(index,1)


    res.send(course);



});



function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
     } 
 
     return Joi.validate(course,schema);
}




module.exports = router;