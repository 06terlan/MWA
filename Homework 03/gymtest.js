const GYM = require('./gym');

const gymEmiter = new GYM();
gymEmiter.on('go', (x)=>console.log(x));