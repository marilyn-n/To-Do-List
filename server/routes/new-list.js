const express = require('express');

const router = express.Router();
const Item = require('../models/Item');

router.get('/new-list', (req, res) => {
  Item.find({})
    .then((result) => {
      console.log('logrado');
      console.log(result);
      res.render('new-list', result);
      console.log('mira');
    })
    .catch(() => console.log('error'));
});

router.post('/new-list', (req, res) => {
  const newItem = new Item({
    itemName: req.body.itemName,
  });
  newItem.save()
    .then(() => {
      console.log('usuario guardado!!!');
      res.redirect('new-list');
      // res.status(200).json();
    })
    .catch(() => console.log('oh oh error'));
});


module.exports = router;
