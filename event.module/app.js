const EventEmitter = require('events')


const Logger = require('./logger')
const logger = new Logger()

logger.on('messageLoged',(args)=>{
    console.log('Event message :',args)
})
logger.log("this is")