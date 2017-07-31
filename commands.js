var fs = require('fs');

function pwd(){
  process.stdout.write(process.cwd());
};

function ls() {
  var files = fs.readdirSync(pwd()).join(" ");
  process.stdout.write(files);
}

module.exports = {
  pwd : pwd,
  ls: ls
}

