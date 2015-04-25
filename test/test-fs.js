console.log("[BEGIN]");
var fs= require("fs");

var now = new Date();
//var now_f= now.format("dd/M/yy h:mm tt");
fs.readFile('test/test-fs.txt', {encoding: 'utf8'}, function(err, data) {
  if (err&&err.code==='ENOENT') {
    console.log('[F1LE N0T F0UND]');
    fs.writeFile('test/test-fs.txt', '[0] '+now+'\n', function(err) {
      console.log('[CREATED]');
    });
  } else {
    var f2arr= data.split('\n');
    console.log(f2arr);
    var index= f2arr.length-1;
    console.log(f2arr.length);

    fs.appendFile('test/test-fs.txt', '['+index+'] '+now+'\n', function(err) {
      if (err) throw(err);

      console.log('[SAVED]');
      /*
      fs.readFile('test/test-fs.txt', String, function (err, data) {
        if (err) throw err;
        console.log('----------------------');
        console.log(data.toString());
        console.log('----------------------');
      });
      */
    });
  }

});
