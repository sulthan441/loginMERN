const router = require('express').Router();
const Login = require('../models/Login.model');

router.get('/login', (req, res) => {
    Login.find()
      .then((logins) => {
        res.json(logins);
      })
      .catch((err) => {
        res.status(400).json(`Error: ${err}`);
      });
  });
  

router.route('/login').post((req, res) => {
  console.log(req.body);
  const newLogin = new Login(req.body);

  newLogin.save()
    .then(() => res.json('Login Data added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
