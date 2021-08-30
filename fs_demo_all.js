var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my text!', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

fs.writeFile('mynewfile2.txt', 'This is my new text!', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
