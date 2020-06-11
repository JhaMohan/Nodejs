const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/mongo-exercises',{ useUnifiedTopology: true })
.then(()=> console.log('connected to mongodb'))
.catch(err => console.error('can not connect to mongodb',err))


const courseSchema = new mongoose.Schema({
    tags:[String],
    date:{type:Date,default:Date.now},
    name: String,
    author: String,
    isPublished:Boolean,
    price:Number,
})


const Course = mongoose.model('Course',courseSchema)

//Exercise 1
// async function getCourse() { 
//     return await Course
//     .find({isPublished:true,tags:"backend"})
//     .sort({name:1})
//     .select({name:1,author:1})
// }

//Exercise 2
// async function getCourse() { 
//     return await Course
//     // .find({isPublished:true},{$and:[{tags:"backend"},{tags:"frontend"}]})
//     .find({isPublished:true,tags:{$in: ['frontend','backend']}})
//     .sort({price:-1})
//     .select('name author price')
// }


//Exercise 3
async function getCourse() { 
    return await Course
    // .find({isPublished:true},{$and:[{tags:"backend"},{tags:"frontend"}]})
    .find({$or:[{name: /.*by.*/},{price:{$gte:15} }]})
    .select('name author price')
}



async function run(){
    const result = await getCourse()
    console.log(result)
}

run();