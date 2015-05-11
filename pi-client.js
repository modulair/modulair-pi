// var config = require('./config');

var socket = require('socket.io-client')('http://modulair.muhammadmustadi.com');
var user_id = process.argv[2] || 'default';
var home_id = process.argv[3] || 'default';
var system_id = process.argv[4] || '550c1489992a101b35f42a80';

var subsystems = {};

var moment = require('moment');
// var sport = "/dev/ttyUSB0";
// var serialport = require('serialport');
// var rl = require("readline");
// var prompts = rl.createInterface(process.stdin, process.stdout);
// var usb = new serialport.SerialPort(sport, {
//     baudrate: 9600,
// });
var async = require('async');

socket.on('connect', function(){
 console.log('you are connected');
});

socket.on('disconnect', function(){});


// socket.on('this', function(data){
//  var msgtime = new Date(data.timestamp);
//  console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
// });

// socket.on('disconnection', function(data){
//  var msgtime = new Date(data.timestamp);
//  console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
// });

// socket.on('getone', function(data){
//  var msgtime = new Date(data.timestamp);
//  console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
// });

socket.on('home' + home_id, function(data){
 var msgtime = new Date(data.timestamp);
 console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
});

var toggleState = 'a';

socket.on('client', function (data) {

  // console.log(data);
  // console.log(moment(Date(data.timestamp)).format());
  if (data=='toggle') {
    // usb.write(toggleState);
    // if (toggleState=='a') {
    //   toggleState='b';
    // } else {
    //   toggleState='a';
    // }
  } else {
    // console.log('other');
  }
});
