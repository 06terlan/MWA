const { BehaviorSubject } = require('rxjs');
const os = require('os');

function checkSystem(){
	
	const subject = new BehaviorSubject('Checking your system…');
	subject.subscribe(
		(next) => console.log(next),
		(err) => console.error('Error: ' + err),
		null
	);

	if(os.totalmem()/1024/1024/1024 < 4){
	 	subject.error('This app needs at least 4 GB of RAM');
	}
	else if(os.cpus().lenght < 2){
		subject.error('Processor is not supported');
	}
	else subject.next('System is checked successfully.');
}
checkSystem();
