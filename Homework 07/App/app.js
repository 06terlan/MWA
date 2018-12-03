const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const decipher = crypto.createDecipher('aes256', 'asaadsaad');
app.get('/secret', (req, res, next) => {

	db.collection('homework7').findOne({}, (err, doc) =>{

		let decrypted = '';
		decipher.on('readable', () => {
		  	const data = decipher.read();
		  	if (data)
		    	decrypted += data.toString('utf8');
		});
		decipher.on('end', () => {
		  	console.log(decrypted);
		  	res.end( decrypted );
		});
		decipher.write(doc.message, 'hex');
		decipher.end();
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//dbconnection
var db

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db('mydb');
  app.listen(4000, () => {
    console.log('listening on 4000')
  });
});

module.exports = app;
