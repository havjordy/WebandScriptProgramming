const express = require('express');
const router = express.Router();

// Route for Home Page
router.get('/home', (req, res) => {
  res.render('Home Page');
});

// Route for About Me Page
router.get('/about', (req, res) => {
  res.render('About me');
});

// Route for Projects Page
router.get('/projects', (req, res) => {
  res.render('Projects');
});

// Route for Contact Me Page
router.get('/contact', (req, res) => {
  res.render('Contact me');
});

module.exports = router;
