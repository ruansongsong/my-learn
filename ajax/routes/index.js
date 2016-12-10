var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getData', (req, res) => {
  res.send({
    "name": "ruansongsong"
  })
});
router.post('/post', (req, res) => {
  console.log(req.body);
})
module.exports = router;
