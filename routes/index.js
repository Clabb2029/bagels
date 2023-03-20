var express = require('express');
var router = express.Router();

dataBagels = [
  {"title" : "Bagel façon Bresse Bleu", "description" : "Les fans de fromage bleu vont adorer cette recette de burger aux blancs de poulet et confit d'oignons. A accompagner de pommes de terre sautées ou de frites.", "image" : "/images/bagel_bleu.jpg"},
  {"title" : "Bagel Pizza", "description" : "La Pizza Bagel réalise votre rêve le plus fou : une pizza à réaliser en quelques minutes avec comme base un bagel garni de sauce tomate, de jambon et de fromage. Une recette idéale pour votre prochain brunch.", "image" : "/images/bagel_pizza.jpg"},
  {"title" : "Bagel Saumon", "description" : "Un délicieux pain rond, ultra moelleux et grillé, garni de saumon fumé et de crème.", "image" : "/images/bagel_saumon.jpg"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bagels'});
});

router.get('/bagels', function(req, res, next) {
  res.render('bagels', { title: 'Bagels', dataBagels:dataBagels});
});

module.exports = router;
