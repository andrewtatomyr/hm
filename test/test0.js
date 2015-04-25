var mongo = require('mongodb');

//var host = 'localhost';
//var port = mongo.Connection.DEFAULT_PORT;
//var db = new mongo.Db('test', new mongo.Server(host, port, {}), {safe:false});

var db = new mongo.Db('test', new mongo.Server('localhost', 27017, {}), {safe:false});
db.open(function(err, db) {
    //if (err) throw(err);
    console.log("Connected!");
    db.close();
});
