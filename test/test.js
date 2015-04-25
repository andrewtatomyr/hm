//var express = require('express');


var mongoose= require('mongoose');
var db= mongoose.createConnection(
  'mongodb://hm:12345678@proximus.modulusmongo.net:27017/umud5adU'
);


//app= express();


db.on('error', console.error);
db.once('open', function(   ) {

  console.log('DB is opened');

  /**/

  // define model =================

  var HL= mongoose.model('HL', {
    urid: Number,
    hl: Number,
    exp: Number
  });
  console.log('Model is defined');


  HL.find(function(err, hl) {


    if (err) return console.error(err);

    console.log('found some... !!!!!!!!!!!!!!!!!11');

  });

  console.log('sought was ended');

  /**
  var hl= new HL(
    // { urid: "100004", hl: -1, exp: 60 }
  );

  //db.hl.insert({ urid: "100004", hl: -1, exp: 60 });
  //var hlInDb= hl.find();

  /**

  for (i= 0; i<100000000; i++) {
    x= i;
  }
  /**/


  /**

  hl.save(function(err, hl, affected) {
    if (err) throw err;

    console.log(arguments);
  });

  /**/


});




console.log('[END]');
