var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/dock';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

var gracefulShutdonw = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function() {
  gracefulShutdonw('node-mon restart', function() {
  	process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function() {
  gracefulShutdonw('app termination', function() {
  	process.exit(0);
  });
});

process.on('SIGTERM', function() {
  gracefulShutdonw('Heroku app shutdown', function() {
    process.exit(0);
  });
});