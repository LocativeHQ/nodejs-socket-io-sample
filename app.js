'use strict';

var socket = require('socket.io-client')('https://my.lcative.io');

socket.on('connect', function () {
  console.log('Connected to my.lcative.io...');

  socket.on('session', function (data) {
    console.log(data);
  });

  socket.emit('session', {username: 'YOUR_USERNAME', password:'YOUR_PASSWORD'});
});

socket.on('fencelog', function (data) {
  if (data.event === 'add') {
    return console.log('Add: ' + JSON.stringify(data.fencelog));
  }

  if (data.event === 'list') {
    return console.log('List: ' + JSON.stringify(data.fencelogs));
  }
});
