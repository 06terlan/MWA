const { Observable } = require('rxjs');
const os = require('os');

function checkSystem(){
	console.log("Checking your system…");
	Observable.create(function(observer){
			
		if(os.totalmem()/1024/1024/1024 < 4){
		 	throw new Error('This app needs at least 4 GB of RAM');
		}
		else if(os.cpus().lenght < 2){
			throw new Error('Processor is not supported');
		}
		
		observer.next('System is checked successfully.');
		observer.complete();
	}).subscribe(
		(next) => console.log(next),
		(err) => console.error(err),
		null
	);
}
checkSystem();
