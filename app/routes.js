// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/register-as-a-data-donor/v1/register/weve-added-you', function (req, res) {
  let answer = req.body.confirmationChannel;

  if (answer === 'email') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/contact-preference/future-contact-preference-email')

  } else if (answer === 'text' ) {

    res.redirect('/register-as-a-data-donor/v1/contact-preference/future-contact-preference-text')

  } else {
    res.redirect('error')
  }
});

module.exports = router;
