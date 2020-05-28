const debugStartup = require('debug')('app:startup') //setting the debug mode
const Joi = require('joi')
const config = require('config')
const helmet = require('helmet')
const logger = require('./middleware/middleware')
const express = require('express')
const app = express()
const courses = require('./routes/courses')
const home = require('./routes/home')


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

//Configuration

console.log('Application Name: ' , config.get('name'));
console.log('Mail server: ',config.get('mail.host'))





app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

if(app.get('env') === 'development') {
    app.use(logger);
    debugStartup('Morgan enabled.......')
}
app.use(logger)



app.use((req,res,next)=>{
    console.log('register..........');
    next();
});





// app.get() -> to get the data from server
// app.post() -> to add the data to server
// app.put() -> to update the data to the server
// app.delete() -> to delete the data from server



app.use('/',home);

//route parameter
app.use('/api/courses',courses)


const port = process.env.PORT || 3000

app.listen(port,() => console.log(`listing to ${port} port`))