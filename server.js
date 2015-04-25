// set up
var express= require("express");
var app= express();
var mongoose= require("mongoose");
//var morgan= require("morgan");
//var bodyParser= require("body-parser");
//var methodOverride= require("method-override");




// configuration

/**/
mongoose.connect('mongodb://hm:12345678@proximus.modulusmongo.net:27017/umud5adU'); //my own on modulus.io: { "login": "todo", "password": "12345678" }

/**/
app.set('port', (process.env.PORT || 5000));//
/**/
app.use(express.static(__dirname+'/public'));
//app.use(morgan("dev"));
//app.use(bodyParser.urlencoded({'extended': 'true'}));
//app.use(bodyParser.json());
//app.use(bodyParser.json({ type: "application/vnd.api+json"}));
//app.use(methodOverride());






/**/
// define model

// Здесь создаём схемы и модели.
var LevelSchema = new mongoose.Schema({

  hl: Number

});

console.log("creating model 'Level'");
var Level= mongoose.model("Level", LevelSchema);

// routes

  // api





  app.get("/api/get-hl", function(req,res) {

    Level.find(function(err,levels) {
      if (err) {
        res.send(err);
      } else {
        res.json(levels);
      }
    });
    
  });
/**/
  app.get("/api/set-hl", function(req,res) {

    Level.create({ //save??
      //urid: 120440,
      hl: -2
    }, function(err, level  ) {
      if (err) {
        res.send(err);
      } else {
        console.log('hl created');
        Level.find(function(err,levels) {
          if (err) {
            res.send(err);
          } else {
            res.json(levels);
          }
        });
      }
    });

  });
/*
  app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id: req.param.todo_id
    },function(err, todo) {
      if (err) {
        res.send(err);
      } else {
        Todo.find(function(err, todos) {
          if (err) {
            res.send(err);
          } else {
            res.json(todos);
          }
        });
      }
    });


  });
*/






// application
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});





// listen
/**
app.listen(8080);
console.log("App listened on port 8080");
/**/
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
/**/
