var express = require('express');
var router = express.Router();
var _ = require('lodash');

var sampleUsers = [
  {
    id: 101,
    name: 'kun'
  },
  {
    id: 102,
    name: 'now'
  }
];
var inc = 102;

///* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(sampleUsers);
});

///* GET user by id. */
router.get('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  var user = _.findLast(sampleUsers, {id: id});
  res.status(200).json(user);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  inc++;
  var item = {
    id: inc,
    name: req.body.name
  };
  sampleUsers.push(item);
  res.status(200).json(item)
});

module.exports = router;
