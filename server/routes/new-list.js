const express = require('express');

const router = express.Router();
const Item = require('../models/Item');

router.get('/new-list', (req, res) => {
  console.log('logrado');
  res.render('new-list');
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
