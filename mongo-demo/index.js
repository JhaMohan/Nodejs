const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{ useUnifiedTopology: true })
.then(()=> console.log('connected to mongodb'))
.catch(err=> console.error("coudn't connect to the mongo...... ",err))



const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})


const Course = mongoose.model('Course',courseSchema)


async function createCourse() {
const course = new Course({
    name: 'Angular course',
    author: 'Aditya',
    tags:['angular','frontend'],
    isPublished:true
})

const result = await course.save();
console.log(result)
}


// createCourse();


// async function getCourse() {
//     const result =await Course
//     //.find(price:{$gt:10,$lte:15})
//     //.find({$})
//     .find({isPublished:true}) 
//     .limit(10)
//     .sort({name:1})
//     .select({name:1,tags:1})
//      .count() //number of document match the crieteria
//     console.log(result)
// }



//regular expression

    // async function getCourse() {
    //     const result =await Course
        
    //     //start with Mosh
    //     .find({author: /^Mosh/})
    //     //end with hedani
    //     .find({author: /Hamedani$/i})
    
    //     //contain Mosh
    //     .find({author:/.*Mosh.*/i})

    //     console.log(result)
    // }


//add pagination
async function getCourse() {
    
    const pageNumber = 2;
    const pageSize = 20;

    // api/courses?pageNumber=2$pageSize=10
    
    const result =await Course
    


    .find({author:Mosh,isPublished:true})
    .skip((pageNumber -1)*pageSize)
    .limit(pageSize)

    console.log(result)
}




getCourse()