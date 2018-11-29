const EventEmitter = require('events');

class GYM extends EventEmitter{
	constructor(){
		super();

		setInterval(()=>this.go(), 1000);
	}

	go(){
		this.emit('go', 'Athlete is working out');
	}
}

module.exports = GYM;