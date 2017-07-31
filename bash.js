var commands = require('./commands');
var userCommand = 'pwd';

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if(cmd === 'pwd'){
    commands[userCommand]();
  } else if (cmd === 'date'){
    var date = (new Date).toString();
    process.stdout.write(date);
  }
  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
