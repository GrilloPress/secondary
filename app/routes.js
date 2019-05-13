// External dependencies
const express = require('express');
const router = express.Router();






router.post('/register-as-a-data-donor/v1/eligibility/where-do-you-live', function (req, res) {
  let answer = req.body.live;

  if (answer === 'england') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/eligibility/is-your-GP-in-scotland-or-wales')

  } else if (answer === 'northernIreland') {

    res.redirect('/register-as-a-data-donor/v1/eligibility/outcome/3')

  } else if (answer === 'scotland' || 'wales' ) {

    res.redirect('/register-as-a-data-donor/v1/eligibility/is-your-GP-in-england')

  } else {
    res.redirect('error')
  }
});

router.post('/register-as-a-data-donor/v1/eligibility/is-your-GP-in-england', function (req, res) {
  let answer = req.body.gpBorderEngland;

  if (answer === 'yes') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/eligibility/outcome/2')

  } else if (answer === 'no' || 'unsure' ) {

    res.redirect('/register-as-a-data-donor/v1/eligibility/outcome/3')

  } else {
    res.redirect('error')
  }
});

router.post('/register-as-a-data-donor/v1/eligibility/is-your-GP-in-scotland-or-wales', function (req, res) {
  let answer = req.body.gpBorderScotlandWales;

  if (answer === 'yes') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/eligibility/outcome/2')

  } else if (answer === 'no' || 'unsure' ) {

    res.redirect('/register-as-a-data-donor/v1/eligibility/outcome/1')

  } else {
    res.redirect('error')
  }
});

router.post('/register-as-a-data-donor/v1/eligibility/are-you-13-or-above', function (req, res) {
  let answer = req.body.age;

  if (answer === 'yes') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/eligibility/where-do-you-live')

  } else if (answer === 'no' ) {

    res.redirect('/register-as-a-data-donor/v1/eligibility/outcome/age')

  } else {
    res.redirect('error')
  }
});

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

router.post('/register-as-a-data-donor/v1/register/check-your-details', function (req, res) {
  let answer = req.body.checkDetails;

  if (answer === 'yes') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/register/do-you-want-to-register-3')

  } else if (answer === 'no' ) {

    res.redirect('/register-as-a-data-donor/v1/register/contact-nhs-login')

  } else {
    res.redirect('error')
  }
});

router.post('/register-as-a-data-donor/v1/your-match/google-deepmind-study', function (req, res) {
  let answer = req.body.researchStudy;

  if (answer === 'yes') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/your-match/we-will-share-your-data')

  } else if (answer === 'no' ) {

    res.redirect('/register-as-a-data-donor/v1/your-match/we-wont-share-your-data')

  } else {
    res.redirect('error')
  }
});

router.post('/register-as-a-data-donor/v1/your-match/we-will-share-your-data', function (req, res) {
  let answer = req.body.researchUpdates;

  if (answer === 'yes') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/your-match/we-will-share-your-data-updates')

  } else if (answer === 'no' ) {

    res.redirect('/register-as-a-data-donor/v1/your-match/no-updates')

  } else {
    res.redirect('error')
  }
});

router.post('/register-as-a-data-donor/v1/your-profile/stop-sharing-your-data', function (req, res) {
  let answer = req.body.getRemoved;

  if (answer === 'yes') { // the || means this OR that

    res.redirect('/register-as-a-data-donor/v1/your-profile/stop-sharing-confirmed')

  } else if (answer === 'no' ) {

    res.redirect('/register-as-a-data-donor/v1/your-profile/still-sharing-confirmed')

  } else {
    res.redirect('error')
  }
});



// Add your routes here - above the module.exports line

module.exports = router;
