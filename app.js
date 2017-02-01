'use strict';

var socket = require('socket.io-client')('https://my.lcative.io');

console.log('Connecting to my.locative.io…');
socket.on('connect', function () {
  console.log('Connected to my.locative.io…');

  socket.on('session', function (data) {
    console.log('Got Session:', data);
  });

  console.log('Authenticating…');
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
