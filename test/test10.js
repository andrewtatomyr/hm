// IT IS WORKING WITH MODULUS/MONGOOSE !!!

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Здесь создаём схемы и модели.
  var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});

// Компиляция модели Movie с помощью movieSchema в качестве структуры.
// Mongoose также создаёт для этих документов коллекцию под названием Movies.
var Movie = mongoose.model('Movie', movieSchema);




//save:::

var pg = new Movie({
  title: 'p-g'
, rating: '100500'
, releaseYear: '0000'  // Обратите внимание на использование текстового значения вместо числового — Mongoose автоматически сконвертирует его.
, hasCreditCookie: false
});

pg.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});


// Найти все фильмы.
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});






});

mongoose.connect('mongodb://hm:12345678@proximus.modulusmongo.net:27017/umud5adU');
