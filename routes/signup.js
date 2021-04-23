const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require('../models/user');
const saltRounds = 10;

router.get('/', (req, res) => {
  res.render('signup')
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, saltRounds)
  })
  req.session.user = user
  res.send('ok')
})

module.exports = router;
