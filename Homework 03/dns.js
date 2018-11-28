const {resolve4} = require('dns');
const {promisify} = require('util');

const dnsResolve4Async =  promisify(resolve4); 

async function getResolved(domain) {
	try{
		const address = await dnsResolve4Async(domain);
		console.log(address);
	}
	catch(err){
		console.log(err);
	}
}

getResolved('www.mum.edu');


console.log('End');