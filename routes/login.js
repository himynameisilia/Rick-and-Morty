const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require('../models/user');

router.get('/', (req, res) => {
  res.render('login')
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email })
  if (user && (bcrypt.compareSync(password, user.password))) {
    req.session.user = user
    res.send('ok')
  }
})

module.exports = router;
