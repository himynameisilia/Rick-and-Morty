const router = require("express").Router();
const Added = require('../models/added');
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { img, caracterName, species, gender, status } = req.body;
  const character = await Added.create({
    img,
    caracterName,
    species,
    gender,
    status,
  })
  const { user } = req.session;
  const userModel = await User.findOne({ email: user.email });
  userModel.added.push(character)
  await userModel.save()
  res.send('ok')
})

module.exports = router;
