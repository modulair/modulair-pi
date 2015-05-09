// var config = require('./config');

var socket = require('socket.io-client')('http://modulair.muhammadmustadi.com');
var home_id = process.argv[2] || 'default';

var sport = "/dev/ttyUSB0";
var serialport = require('serialport');
var rl = require("readline");
var prompts = rl.createInterface(process.stdin, process.stdout);
var usb = new serialport.SerialPort(sport, {
    baudrate: 9600,
});
var async = require('async');

socket.on('connect', function(){
 console.log('you are connected');
});

socket.on('disconnect', function(){});


socket.on('this', function(data){
 var msgtime = new Date(data.timestamp);
 console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
});

socket.on('disconnection', function(data){
 var msgtime = new Date(data.timestamp);
 console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
});

socket.on('getone', function(data){
 var msgtime = new Date(data.timestamp);
 console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
});
socket.on('home' + home_id, function(data){
 var msgtime = new Date(data.timestamp);
 console.log(msgtime.getHours() + ':' + msgtime.getMinutes() + ':' + msgtime.getSeconds() + ' : ' + data.content);
});

var toggleState = 'a';

socket.on('client', function (data) {
  if (data=='toggle') {
    console.log('asdf');
    // usb.write(toggleState);
    // if (toggleState=='a') {
    //   toggleState='b';
    // } else {
    //   toggleState='a';
    // }
  } else {
    console.log('other');
  }
});
