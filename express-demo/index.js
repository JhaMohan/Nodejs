const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const course = [
    {id:1,name:'Adita'},
    {id:2,name:'Adita2'},
    {id:3,name:'Adita3'},
]

// app.get() -> to get the data from server
// app.post() -> to add the data to server
// app.put() -> to update the data to the server
// app.delete() -> to delete the data from server


app.get('/',(req,res)=>{
    res.send("Hello world to express")
});



//route parameter

app.get('/api/courses/',(req,res)=>{
    res.send(course)
});

app.get('/api/courses/:id',(req,res)=>{

    const course1 = course.find(c => c.id === parseInt(req.params.id));
    if(!course1) return res.status(404).send('The course you are finding is not present...........')
    res.send(course1)

});


app.post('/api/courses',(req,res)=>{
   
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



app.put('/api/courses/:id',(req,res)=>{
    
    //id present
    const courses = course.find(c => c.id === parseInt(req.params.id));
    if (!courses) return res.status(404).send('user not present');
   

    //validating value
   
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    courses.name = req.body.name;

    res.send(course);

});

app.get('/api/posts/:year/:month',(req,res)=>{
     res.send(req.params);
    // res.send(req.query); //http://localhost:8000/api/posts/2018/3?sortBY="name%2"
});

app.delete('/api/courses/:id',(req,res)=>{
  
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

const port = process.env.PORT || 3000

app.listen(port,() => console.log(`listing to ${port} port`))