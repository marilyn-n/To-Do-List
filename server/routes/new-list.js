const express = require('express');

const router = express.Router();

router.get('/new-list', (req, res) => {
  console.log('logrado');
  res.render('new-list');
});

module.exports = router;
