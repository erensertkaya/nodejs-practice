const events = require('events');
const eventEmitter = new events.EventEmitter();


eventEmitter.on('hi', (object) => {
    console.log(`hello ${object.name} ${object.surname}`);
});

eventEmitter.emit('hi',{name:'eren', surname:'sertkaya'});

/*
//execute with emit command is just work one time, and stop

eventEmitter.once('sayHi',() => {
    console.log('hello');
})

eventEmitter.emit('sayHi');


*/
