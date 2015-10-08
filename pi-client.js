//socketio
var socket = require('socket.io-client')('http://104.236.39.45:3211');
//identity
var user_id = process.argv[2] || 'default';
var home_id = process.argv[3] || 'default';
var system_id = process.argv[4] || '550c1489992a101b35f42a80';
var subsystems = [];
//usb
//var sport = "/dev/ttyUSB0";
//var serialport = require('serialport');
var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);
//var usb = new serialport.SerialPort(sport, {
//    baudrate: 9600,
//});
//async
var async = require('async');

socket.on('connect', function(){
 console.log('you are connected');
});

socket.on('disconnect', function(){});


socket.on('home' + home_id, function(data){
 var msgtime = new Date(data.timestamp);
 console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
});

var toggleState = 'a';
var lamp = [];
lamp[0] = ['a','b'].reverse();
lamp[1] = ['c','d'].reverse();
lamp[2] = ['e','f'].reverse();
lamp[3] = ['g','h'].reverse();

var control = [0,'q','i','r','s','j','k','l','m','n','o','p'];

socket.on('client', function (data) {
	console.log(data);
	if (data.title=='changeState') {
		//console.log('asdf');
		usb.write(toggleState);
		console.log(toggleState);
		if (toggleState=='b') {
			toggleState='a';
		} else {
			toggleState='b';
		}
	} else if (data.title=='toggle') {
      if (data.state<5) {
//  		  usb.write(lamp[data.state-1][0]);
        lamp[data.state-1].reverse();
      } else {
        usb.write(control[data.state-5]);
        }
      }

});
