const EventEmitter = require('events')
const emitter = new EventEmitter();

//Register the event
emitter.on('messageLogged',(args)=>{
    console.log('message loged',args)
    console.log('message loged',args.id)
    console.log('message loged',args.url)
});

//emit an event
emitter.emit('messageLogged',{id:1,url:'https://test'})
