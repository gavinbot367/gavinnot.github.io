const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const msg = req.body.message || '';
  let reply;

  if (msg.toLowerCase().includes('hello')) {
    reply = "Ahoy, Lewis! Gavinbot reporting for duty ⚓🤖";
  } else if (msg.toLowerCase().includes('f1')) {
    reply = "Red Bull’s wings are looking sharp this season 🏁🍾";
  } else {
    reply = "Squawk! I’m still learning — can you rephrase?";
  }

  res.json({ reply });
});

module.exports = router;
