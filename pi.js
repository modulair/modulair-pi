var sport = "/dev/ttyUSB0";
var serialport = require('serialport');
var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);
var usb = new serialport.SerialPort(sport, {
    baudrate: 9600,
});
var async = require('async');
//    parser: serialport.parsers.readline('\n')


usb.on('open', function () {
	console.log('xbee udah on');
	prompt();
  usb.on('data', function(data) {
    //process.exit();
    console.log('data received: ' + data);
  });
  //usb.write("HELLO I AM OPEN\n", function(err, results) {
  	//	console.log('err ' + err);
    //	console.log('results ' + results);
  //});
	//prompts.question("Apa perintah anda?", function (a) {
	//
	//	if (a=='0') {
	//		process.exit();
	//	} else {
	//		usb.write(a);
	//	}
	//});
});

var reading, loop=true;
var prompt = function () {

	async.series([
		function (callback) {
			prompts.question("input pls", function (a) {
			reading = a;
			callback(null);
			});

		},
		function (callback) {
			if (reading=='0') {
				process.exit();
			} else {
				usb.write(reading);
			}
			callback(null);
		}
	],

	function (err, results) {
		prompt();
	});
}
