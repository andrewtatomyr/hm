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

var thor = new Movie({
  title: 'Thor'
, rating: 'PG-13'
, releaseYear: '2011'  // Обратите внимание на использование текстового значения вместо числового — Mongoose автоматически сконвертирует его.
, hasCreditCookie: true
});

thor.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});


// Найти все фильмы.
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});






});

mongoose.connect('mongodb://localhost/test');
