var io = require('socket.io');
var IO = {};

module.exports = IO;

IO.io = io;

IO.init = function (server) {
  IO.io = io(server);

  IO.io.on('connection', function (socket) {
    // Put each client in a room specified by their user_id.
    // emitted when a user receives their information after logging in with OAuth.
    socket.on('join', function (data) {
      if (!data.entry.user_id)
        console.error('joining invalid room:', data.entry.user_id);

      console.log('server adding socket to room:', data.entry.user_id);
      socket.join(data.entry.user_id);
    });

    // first listener!
    socket.on('new_message', function (data) {
      console.log('broadcasting message to:', data.to);
      socket.to(data.to).emit('new_message', data.entry);
    });

    /*
      data: { to (partner to share with), entry: { lat, lng }}
    */
    socket.on('new_location', function (data) {
      socket.to(data.to).emit('new_location', data.entry);
    });

    socket.on('picked_up', function (data) {
      socket.to(data.to).emit('picked_up', {});
    });

    socket.on('dropped_off', function (data) {
      socket.to(data.to).emit('dropped_off', {});
    });

    socket.on('remove_rider', function (data) {
      IO.io.emitTo(data.to, 'remove_rider', data.entry);
    });

  });

  IO.io.emitTo = function (roomArray, event, payload) {
    if (!Array.isArray(roomArray)) roomArray = [roomArray];

    roomArray.map(function (roomId) {
      IO.io.to(roomId).emit(event, payload);
    });
  };

  return IO.io;
};
