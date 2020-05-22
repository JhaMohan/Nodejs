const EventEmitter = require('events')

var url = "https://urltologin/user"


class Logger extends EventEmitter {

    log(message) {
    console.log('message are:',message);

    this.emit('messageLoged',{id:1,url:'https://test'})
  }

}

// module.exports.logger = logger;

module.exports = Logger;