var fs = require('fs');

try {
  fs.mkdir('./500_files');

  console.log('merge conflicts');


  console.log('are annoying');
} catch(e) {
  // do nothing




  console.log('except log');
}

for (var i = 100; i < 600; ++i) {
  fs.writeFile('./500_files/' + i + '.txt', 'Hello from file ' + i + '!', () => {});
}
